const btn = document.querySelector('.btn');
const form = document.getElementById('expenseform');
const expenseamount = document.getElementById('amount');
const desc = document.getElementById('desc');
const cat = document.getElementById('category');


let userArr = [];

form.addEventListener('submit',(e)=>{
e.preventDefault();


if(expenseamount.value === '' || desc.value === '' || cat.value === '')
{
    alert('Please enter values');
}else{
    let userObj = {
        'amount' : expenseamount.value,
        'description' : desc.value,
        'category' : cat.value,
    };

        axios.post('https://crudcrud.com/api/3147ad6a4d044cb29f5a3f08ce57e218/unicorns', userObj)
        .then((res)=>{
            createAndAppendUserList(userObj);
        console.log(res);})
            .catch((err)=>{console.log(err)});
    }
});



window.addEventListener('DOMContentLoaded', (event) => {

    axios.get("https://crudcrud.com/api/3147ad6a4d044cb29f5a3f08ce57e218/unicorns")
    .then((res)=>{
        console.log(res);
    
        for(var i = 0; i <= res.data.length; i++)
        {
        createAndAppendUserList(res.data[i]);
        }
    })
    .catch((err)=>{
        console.log(err);
    });
});

function createAndAppendUserList(exarg){
    let li = document.createElement('li');
    li.setAttribute('expenseid',exarg._id);
    li.className = 'item';
    li.innerText = exarg.amount + '  -  ' + exarg.description+'  -  '+exarg.category;
    let editbtn = document.createElement('button');
    editbtn.innerText = 'Edit';
    editbtn.className = 'edit';
    let deletebtn = document.createElement('button');
    deletebtn.innerText = 'Delete';
    deletebtn.className = 'delete';
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
        axios.delete("https://crudcrud.com/api/3147ad6a4d044cb29f5a3f08ce57e218/unicorns/"+remli.getAttribute('expenseid'))
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        });
        }
  }

function editexpense(e){  
  if(e.target.classList.contains('edit') )
  {
        let remli = e.target.parentElement;
        expenselist.removeChild(remli);

        axios.get("https://crudcrud.com/api/3147ad6a4d044cb29f5a3f08ce57e218/unicorns/"+remli.getAttribute('expenseid'))
        .then((res)=>{
        console.log(res);
        expenseamount.value = res.data.amount;
        desc.value = res.data.description;
        cat.value = res.data.category;
        })
        .catch((err)=>{
        console.log(err);
        });

        axios.delete("https://crudcrud.com/api/3147ad6a4d044cb29f5a3f08ce57e218/unicorns/"+remli.getAttribute('expenseid'))
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        });

  }
}