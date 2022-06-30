const btn = document.querySelector('.btn');

const myForm = document.getElementById('my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');

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
 
  let nameText = nameInput.value;
  let emailText = emailInput.value;
  if(nameInput.value === '' || emailInput.value === '')
  {
      msg.classList.add('error');
      msg.innerHTML = "Enter details";
      setTimeout(()=> msg.remove(), 1000)
  }else{
    	console.log(nameInput.value+' '+ emailInput.value);
      localStorage.setItem('name',nameText);
      localStorage.setItem('email',emailText);
  }
});

// function onSubmit




