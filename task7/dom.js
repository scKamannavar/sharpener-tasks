let x = document.querySelector('#items');

let newli = document.createElement("div");
newli.className = "list-group-item";
newli.setAttribute('title','testing');
let newliText = document.createTextNode('Hello World');
newli.appendChild(newliText);
x.insertBefore(newli,x.firstElementChild);


let newh1 = document.createElement("h1");
newh1.id = 'header-title';
let newh1text = document.createTextNode('Hello World');
newh1.appendChild(newh1text);
let container = document.querySelector('header .container');
let h1 = document.querySelector('header .container h1');
container.insertBefore(newh1,h1);
console.log(newh1);

// x.insertAdjacentElement(newli,);