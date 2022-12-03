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
    
    // Alerts the user if the input field is empty
    if(input.value === '') {
        alert('You must write something to create new list item!');
    } else {
        listItems.appendChild(todoItem);
    }

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