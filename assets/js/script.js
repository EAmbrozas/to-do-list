//selectors
const input = document.querySelector('#input');
const addBtn = document.querySelector('.add_Btn');
const listItems = document.querySelector('#list_items');
const editBtn = document.querySelector('edit_Btn');
const closeBtn = document.getElementById('close_Btn');
const colorTheme = document.getElementById('color_theme');

//Event Listeners
addBtn.addEventListener("click", addTodo);
closeBtn.addEventListener("click", hideEditMenu);
colorTheme.addEventListener('change', changeTheme);

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

    // Removes input value when the add button is clicked on to
    input.value = '';

    // Toggle list item to checked when clicked on to
    todoItem.addEventListener("click", checked);
    function checked() {
        todoItem.classList.toggle('checked');
    }
}

/**
 * Displayes edit menu when clicked on the edit button
 */
function showEditMenu() {
    const popup = document.getElementById('popup');
    popup.style.display = 'block';
}

/**
 * Hide edit menu when clicked on the close button
 */
function hideEditMenu() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

/**
 * Changes color theme depending on what color
 * is selected in the theme drop down menu
 */
function changeTheme() {
    if (colorTheme.value === 'blue') {
        document.documentElement.className = ('blue');
    } else if (colorTheme.value === 'grey') {
        document.documentElement.className = ('grey');
    } else if (colorTheme.value === 'pink') {
        document.documentElement.className = ('pink');
    } else {
        document.documentElement.className = ('green');
    }
}