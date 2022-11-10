const btn = document.querySelector('.btn');
const form = document.getElementById('expenseform');
const expenseamount = document.getElementById('amount');
const desc = document.getElementById('desc');
const cat = document.getElementById('category');

const crudKey = '604d7fad9e8240c1a07d401b5993529f';
let userArr = [];

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(expenseamount.value === '' || desc.value === '' || cat.value === '' || cat.value === '1')
    {
        alert('Please enter values');
    }
    else{
            let userObj = {
                'amount' : expenseamount.value,
                'description' : desc.value,
                'category' : cat.value,
            };
            const postData = async ()=> {
                try{ 
                    const response = await axios.post('https://crudcrud.com/api/'+crudKey+'/unicorns', userObj)
                    
                    location.reload(); 
                    createAndAppendUserList(userObj);
                    expenseamount.value = '';
                    desc.value = '';
                    cat.value = '';
                    console.log(res);
                }
                catch(err){
                    console.log(err);
                }
            }
            postData();
        }
});


window.addEventListener('DOMContentLoaded', (event) => {
    const getData = async () => {
        try{
            const response = await axios.get("https://crudcrud.com/api/"+crudKey+"/unicorns");
            console.log(response);
            for(var i = 0; i <= response.data.length; i++)
            {
            createAndAppendUserList(response.data[i]);
            }
        }
        catch(error){
            console.log(error);
        }
    };
    getData();
});


function createAndAppendUserList(exarg){
    let li = document.createElement('li');
    li.setAttribute('expenseid',exarg._id);
    li.className = 'item';
    li.innerText = exarg.amount + ' Rs  -  ' + exarg.description+'  -  '+exarg.category;

    let editbtn = document.createElement('button');
    editbtn.innerText = 'Edit';
    editbtn.className = 'button edit';

    let deletebtn = document.createElement('button');
    deletebtn.innerText = 'Delete';
    deletebtn.className = 'button delete';

    li.appendChild(deletebtn);
    li.appendChild(editbtn);
    expenselist.appendChild(li);
}

expenselist.addEventListener('click', deleteexpense);
expenselist.addEventListener('click', editexpense);

function deleteexpense(e)
{
    if(e.target.classList.contains('delete') )
    {
        let remli = e.target.parentElement;
        expenselist.removeChild(remli);
        let temexpid = remli.getAttribute('expenseid');
        console.log(remli.getAttribute('expenseid')+' User Deleted');
        const deleteData = async () => {
            try{
                const response = await axios.delete("https://crudcrud.com/api/"+crudKey+"/unicorns/"+remli.getAttribute('expenseid'));
                console.log(res);
            }
            catch(err){
                console.log(err);
            }

        }
        deleteData();
    }
}

function editexpense(e){  
  if(e.target.classList.contains('edit') )
  {
        let remli = e.target.parentElement;
        let foo = remli.getAttribute('expenseid');
        expenselist.removeChild(remli);
        const editData = async () => {
            try{
                const response = await axios.get("https://crudcrud.com/api/"+crudKey+"/unicorns/"+remli.getAttribute('expenseid'));
                console.log(response.data);
                expenseamount.value = response.data.amount;
                desc.value = response.data.description;
                cat.value = response.data.category;
            }
            catch(err){
                console.log(err);
            }
        }
        editData();
        const deleteData = async () => {
            try{
                const response = await axios.delete("https://crudcrud.com/api/"+crudKey+"/unicorns/"+remli.getAttribute('expenseid'));
                console.log(res);
            }
            catch(err){
                console.log(err);
            }

        }
        deleteData();
  }
}