const btn = document.querySelector('.btn');

const myForm = document.getElementById('my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');

let userArr = [];

//--------------------Display Localstorage After Refreshing -----------------
let x = localStorage.getItem('user');
let y = document.querySelectorAll('li');
// if(x === null){
// }
// else{
//   y[0].innerText = `${JSON.parse(x).name }` + '  '+ `${JSON.parse(x).email}` ;
// }
//--------------------Display Localstorage After Refreshing -----------------

btn.addEventListener('mouseover',(e)=>{
  e.preventDefault();
    document.querySelector('.btn').style.backgroundColor = 'yellow';
    document.querySelector('.btn').style.color = 'black';
});
btn.addEventListener('mouseout',(e)=>{
  e.preventDefault();
      document.querySelector('.btn').style.backgroundColor = 'red';
    document.querySelector('.btn').style.color = 'white';
 
  
});

let userlist = document.querySelector('ul');

  myForm.addEventListener('submit',(e)=>{
    // e.preventDefault();
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

      // console.log(JSON.stringify(userObj));
      userArr.push(userObj);
      console.log(userArr);
      localStorage.setItem('user'+nameText,JSON.stringify(userArr));
     
      x = localStorage.getItem('user');
      // let a =  localStorage.getItem('user');
      // console.log(JSON.parse(x));

      // let userlist = document.querySelector('ul');
      let li = document.createElement('li');
      li.className = 'item';
      li.innerText = `${nameText}` +' '+ `${emailText}`;
      userlist.appendChild(li);
      console.log(userlist);
      // y[0].innerText = `${JSON.parse(x).name }` + '  '+ `${JSON.parse(x).email}` ;

  }
});

window.addEventListener('DOMContentLoaded', (event) => {

  for(let i = 0; i <= localStorage.length-1; i++)
  {
    let x = localStorage.key(i);
    let y = JSON.parse(localStorage.getItem(x));
    console.log(y[0]);
    let li = document.createElement('li');
    li.className = 'item';
    li.innerText = `${y[0].name}`+' '+ `${y[0].email}`;
    userlist.appendChild(li);

    // console.log(y[i].name);
  }
});





