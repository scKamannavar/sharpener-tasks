const btn = document.querySelector('.btn');

const myForm = document.getElementById('my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');

let userArr = [];

let x = localStorage.getItem('user');
let y = document.querySelectorAll('li');


btn.addEventListener('mouseover',(e)=>{
  e.preventDefault();
    document.querySelector('.btn').style.backgroundColor = 'grey';
    document.querySelector('.btn').style.color = 'white';
});
btn.addEventListener('mouseout',(e)=>{
  e.preventDefault();
      document.querySelector('.btn').style.backgroundColor = '#333';
    document.querySelector('.btn').style.color = 'white';
 
  
});

let userlist = document.querySelector('ul');

  myForm.addEventListener('submit',(e)=>{
    e.preventDefault();
  let nameText = nameInput.value;
  let emailText = emailInput.value;
  if(nameInput.value === '' || emailInput.value === '')
  {
      msg.classList.add('error');
      msg.innerHTML = "Enter details";
      setTimeout(()=> msg.remove(), 3000)
  }else{
    	// console.log(nameInput.value+' '+ emailInput.value);
      let userObj = {
        'name' : nameText,
        'email' : emailText
      };


    //   axios({
    //     method: 'POST',
    //     url: 'https://crudcrud.com/api/5bfa174ebb404a0dbfad390f18146b0c',
    //     data :{
    //       title : 'New Party Bash',
    //       completed : false
    //     }
    //   })
    //   .then((res)=> showOutput(res))
    //   .catch(err => console.error(err));
      axios.post("https://crudcrud.com/api/ad4af8cc0c8f49b288c8e3ae3396b521/adduser", userObj)
      .then((res)=>{
        createAndAppendUserList(res.data.name, res.data.email);
        // console.log(res.data.name);
    })
      .catch((err)=>{console.log(err)});
      


  
    //   userArr.push(userObj);
    //   console.log(userArr);
    //   localStorage.setItem('user'+emailText,JSON.stringify(userArr));
      
    //   createAndAppendUserList(`${nameText}` +' '+ `${emailText}`, emailText);  

      // console.log(userlist);
      // y[0].innerText = `${JSON.parse(x).name }` + '  '+ `${JSON.parse(x).email}` ;

  }
});

window.addEventListener('DOMContentLoaded', (event) => {

  for(let i = 0; i <= localStorage.length-1; i++)
  {
    let x = localStorage.key(i);
    let y = JSON.parse(localStorage.getItem(x));
    console.log(y[0]);
    createAndAppendUserList(`${y[0].name}`+'   '+ `${y[0].email}`,y[0].email);

  }
});

function createAndAppendUserList(arg, emailarg)
{
  let li = document.createElement('li');
  li.setAttribute('userid','user'+emailarg);
  li.className = 'item';
  li.innerText = arg;
  let editbtn = document.createElement('button');
  editbtn.innerText = 'Edit';
  editbtn.className = 'edit';
  editbtn.style.float = 'right';
  let deletebtn = document.createElement('button');
  deletebtn.innerText = 'Delete';
  deletebtn.className = 'delete';
  deletebtn.style.float = 'right';
  li.appendChild(deletebtn);
  li.appendChild(editbtn);
  userlist.appendChild(li);
  console.log(li);
}



userlist.addEventListener('click', deleteUser);
userlist.addEventListener('click', editUser);

 function deleteUser(e){
  if(e.target.classList.contains('delete') )
  {
    let remli = e.target.parentElement;
    userlist.removeChild(remli);
    
  console.log(remli.getAttribute('userid')+' User Deleted');
  localStorage.removeItem(remli.getAttribute('userid'));
  }
 }


 function editUser(e){  
  if(e.target.classList.contains('edit') )
  {
    console.log('Editing');

    let remli = e.target.parentElement;
    userlist.removeChild(remli);
    let userObj = localStorage.getItem(remli.getAttribute('userid'));
    // console.log(JSON.parse(userObj)[0]);
    let inst = JSON.parse(userObj)[0];
    nameInput.value = inst.name;
    emailInput.value = inst.email;
    localStorage.removeItem(remli.getAttribute('userid'));

  }
 }


