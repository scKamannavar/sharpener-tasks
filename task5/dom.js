let x = document.getElementsByTagName('li');
console.log(x);
for(let i = 0; i< x.length; i++)
{
    x[i].style.fontWeight = 'bold';
    x[i].style.backgroundColor = 'green';
}