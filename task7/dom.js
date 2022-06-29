let x = document.querySelector('#items');
// console.log(x.parentElement);
x.parentElement.style.backgroundColor = 'lightGrey';

x.lastElementChild.style.backgroundColor =  'lightBlue';

x.firstChild.style.backgroundColor =  'lightBlue';
// console.log(x.lastChild);

x.lastChild.style.color =  'white';

x.firstElementChild.style.backgroundColor =  'lightBlue';

let y = document.querySelector('li');
y.nextSibling.style.backgroundColor =  'black';

y.nextElementSibling.style.color =  'white';

x.previousSibling.style.color = 'yellow';

x.previousElementSibling.style.fontWeight= 'bold';



var newli = document.createElement("div");
newli.className = "list-group-item";
newli.setAttribute('title','testing');
let newliText = document.createTextNode('New item Added');
newli.appendChild(newliText);

console.log(newli);
x.insertBefore(newli,x.lastElementChild);