//selectors
const input = document.querySelector('#input');
const addBtn = document.querySelector('.add_Btn');
const listItems = document.querySelector('#list_items');

//Event Listeners
addBtn.addEventListener("click", addTodo);


//Functions

/**Adds to do list item in list items ul*/
// function to ad list item
function addTodo(event) {
    const todoItem = document.createElement('li');
    todoItem.innerText = input.value;
    listItems.appendChild(todoItem);
}