let x2 =  document.querySelectorAll('.list-group-item:nth-child(2)');
x2[0].style.color = 'green';

let xOdd =  document.querySelectorAll('.list-group-item:nth-child(odd)');
// console.log(xOdd);
for (let i = 0; i<xOdd.length; i++)
{
    xOdd[i].style.backgroundColor = 'green';
}