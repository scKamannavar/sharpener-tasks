const btn = document.querySelector('.btn');

const myForm = document.getElementById('my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');

//--------------------Display Localstorage After Refreshing -----------------
let x = localStorage.getItem('user');
let y = document.querySelectorAll('li');
if(x === null){
}
else{
  y[0].innerText = `${JSON.parse(x).name }` + '  '+ `${JSON.parse(x).email}` ;
}
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

      // console.log(JSON.stringify(userObj));
      localStorage.setItem('user',JSON.stringify(userObj));
      x = localStorage.getItem('user');
      
      // console.log(JSON.parse(x));
      y[0].innerText = `${JSON.parse(x).name }` + '  '+ `${JSON.parse(x).email}` ;

  }
});





