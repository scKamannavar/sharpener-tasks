let form = document.getElementById('addForm');
let list = document.getElementById('items');

// let del = document.getElementsByClassName('delete');

form.addEventListener('submit', addItem);
list.addEventListener('click', deleteItem);

function deleteItem(e)
{   if(e.target.classList.contains('delete') )
    {
        if(confirm('Are you sure?')){
            let remli = e.target.parentElement;
            list.removeChild(remli);
        }
        console.log('Fidelia');
    }
   
}

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
