let form = document.getElementById('addForm');
let list = document.getElementById('items');

form.addEventListener('submit', addItem);


function addItem(e)
{
    e.preventDefault();
    let newitem = document.getElementById('item').value;

    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.innerText = newitem;

    let deletebtn = document.createElement('button');
    deletebtn.innerText = 'X';
    deletebtn.className = 'btn btn-danger btn-sm float-right delete'
    li.appendChild(deletebtn);

    list.appendChild(li);
    console.log(li);

}
