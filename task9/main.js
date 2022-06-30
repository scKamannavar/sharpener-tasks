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
    let newdesc = document.getElementById('itemDesc').value;

    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.innerText = newitem;

    let deletebtn = document.createElement('button');
    deletebtn.innerText = 'X';
    deletebtn.className = 'btn btn-danger btn-sm float-right delete';

    let editbtn = document.createElement('button');
    editbtn.innerText = 'Edit';
    editbtn.className = 'btn btn-sm float-right';

    let desc = document.createElement('p');
    desc.innerText = newdesc;
    
    li.appendChild(editbtn);
    li.appendChild(deletebtn);
    li.appendChild(desc);
    

    list.appendChild(li);

}

function filterItem(e){
    let text = e.target.value.toLowerCase();
    let itemlist  = list.getElementsByTagName('li');
    let itemDescription  = list.getElementsByTagName('p');
    let tempitemdesc = Array.from(itemDescription);
    // console.log(tempitemdesc);

    let temp = Array.from(itemlist);
    for(let i = 0; i<temp.length;i++)
    {
        let itemname = temp[i].firstChild.textContent;
        let itemd = tempitemdesc[i].firstChild.textContent;
        // console.log(itemname);
        if(itemname.toLowerCase().indexOf(text) != -1 || itemd.toLowerCase().indexOf(text) != -1)
        {
            temp[i].style.display = 'block';
        }
        else
        {
            temp[i].style.display = 'none';
        }
    }


}
