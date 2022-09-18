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


    axios.post("https://crudcrud.com/api/b8747b7186664a8387a37827d22086f8/adduser", userObj)
    .then((res)=>{
      createAndAppendUserList(res.data.name, res.data.email);
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

  axios.get("https://crudcrud.com/api/b8747b7186664a8387a37827d22086f8/adduser")
  .then((res)=>{
    console.log(res);

    for(var i = 0; i <= res.data.length; i++)
    {
      createAndAppendUserList(res.data[i].name, res.data[i]._id);
    }
  })
  .catch((err)=>{
    console.log(err);
  });
  // for(let i = 0; i <= localStorage.length-1; i++)
  // {
  //   let x = localStorage.key(i);
  //   let y = JSON.parse(localStorage.getItem(x));
  //   console.log(y[0]);
  //   createAndAppendUserList(`${y[0].name}`+'   '+ `${y[0].email}`,y[0].email);

  // }
});

function createAndAppendUserList(arg, id)
{
  let li = document.createElement('li');
  li.setAttribute('userid',id);
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

  axios.delete("https://crudcrud.com/api/b8747b7186664a8387a37827d22086f8/adduser/"+remli.getAttribute('userid'))
  .then((res)=>{
    console.log(res);
  })
  .catch((err)=>{
    console.log(err);
  });
  }
 }


 function editUser(e){  
  if(e.target.classList.contains('edit') )
  {
    console.log('Editing');

    let remli = e.target.parentElement;
    userlist.removeChild(remli);
    // let userObj = localStorage.getItem(remli.getAttribute('userid'));

    axios.get("https://crudcrud.com/api/b8747b7186664a8387a37827d22086f8/adduser/"+remli.getAttribute('userid'))
    .then((res)=>{
      console.log(res);
      nameInput.value = res.data.name;
      emailInput.value = res.data.email;
    })
    .catch((err)=>{
      console.log(err);
    });
    // console.log(JSON.parse(userObj)[0]);
    // let inst = JSON.parse(userObj)[0];

    axios.delete("https://crudcrud.com/api/b8747b7186664a8387a37827d22086f8/adduser/"+remli.getAttribute('userid'))
    .then((res)=>{
      console.log(res);
    })
    .catch((err)=>{
      console.log(err);
    });

  }
 }


