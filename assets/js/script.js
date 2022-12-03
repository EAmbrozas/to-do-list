//selectors
const input = document.querySelector('#input');
const addBtn = document.querySelector('.add_Btn');
const listItems = document.querySelector('#list_items');

//Event Listeners
addBtn.addEventListener("click", addTodo);

//Functions

/**Adds to do list item in list items ul*/
// Function to add list item
function addTodo(event) {
    const todoItem = document.createElement('li');
    todoItem.innerText = input.value;
    listItems.appendChild(todoItem);

    // Appends remove button for each list item
    const removeBtn = document.createElement('button');
    removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    removeBtn.classList.add('remove_Btn');
    todoItem.appendChild(removeBtn);

    // Removes list item when the remove button is clicken on to
    removeBtn.addEventListener("click", removeTodo);
    function removeTodo(event) {
        todoItem.remove();
    }
}