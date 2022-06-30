let form = document.getElementById('addForm');
let list = document.getElementById('items');
let filter = document.getElementById('filter');

// let del = document.getElementsByClassName('delete');

form.addEventListener('submit', addItem);
list.addEventListener('click', deleteItem);
filter.addEventListener('keyup', filterItem);

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
    deletebtn.className = 'btn btn-danger btn-sm float-right delete';

    let editbtn = document.createElement('button');
    editbtn.innerText = 'Edit';
    editbtn.className = 'btn btn-sm float-right';
    
    li.appendChild(editbtn);
    li.appendChild(deletebtn);
    

    list.appendChild(li);
    // console.log(li);


}
// let x = 'Technical';
// console.log(x.indexOf('cal'));
function filterItem(e){
    let text = e.target.value.toLowerCase();
    let itemlist  = list.getElementsByTagName('li');
    Array.from(itemlist).forEach(function(item){
        let itemname = item.firstChild.textContent;

        if(itemname.toLowerCase().indexOf(text) != -1)
        {
            item.style.display = 'block';
        }
        else
        {
            item.style.display = 'none';
        }
        // console.log(itemname);
    } );
    
}
