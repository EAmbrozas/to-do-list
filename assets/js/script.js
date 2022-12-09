//selectors
const input = document.querySelector('#input');
const addBtn = document.querySelector('.add_Btn');
const listItems = document.querySelector('#list_items');
const closeBtn = document.getElementById('close_Btn');
const colorTheme = document.getElementById('color_theme');
const fontFamily = document.getElementById('font_family');


//Event Listeners
addBtn.addEventListener("click", addTodo);
closeBtn.addEventListener("click", hideThemeMenu);
colorTheme.addEventListener('change', changeTheme);
fontFamily.addEventListener('change', changeFont);


//Functions

/**Adds to do list item in list items ul*/
// Function to add list item
function addTodo() {
    const todoItem = document.createElement('li');
    

    // Adds p element to list item with the value of the input
    const p = document.createElement('p');
    p.innerText = input.value;
    todoItem.appendChild(p);

    // Alerts the user if the input field is empty using sweet alert
    if(input.value === '') {
        swal('You must write something to create new list item!');
        
    } else {
        listItems.appendChild(todoItem);
    }

     // Appends controles span for each list item
    const controles = document.createElement('span');
    controles.classList.add('controles');
    todoItem.appendChild(controles);

    // Appends check button to controles span
    const checkBtn = document.createElement('button');
    checkBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkBtn.classList.add('check_Btn');
    controles.appendChild(checkBtn);

    // Appends remove button to controles span
    const removeBtn = document.createElement('button');
    removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    removeBtn.classList.add('remove_Btn');
    controles.appendChild(removeBtn);

    // Appends edit button to controles span
    const editBtn = document.createElement('button');
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    editBtn.classList.add('edit_Btn');
    controles.appendChild(editBtn);

    // Appends drag button to controles span
    const dragBtn = document.createElement('button');
    dragBtn.innerHTML = '<i class="fa-solid fa-list"></i>';
    dragBtn.classList.add('drag_Btn');
    controles.appendChild(dragBtn);

    // Removes list item when the remove button is clicken on to
    removeBtn.addEventListener("click", removeTodo);
    function removeTodo() {
        todoItem.remove();
    }

    // Removes input value when the add button is clicked on to
    input.value = '';

    // Toggle list item to checked when clicked on to
    checkBtn.addEventListener("click", checked);
    function checked() {
        todoItem.classList.toggle('checked');
        p.classList.toggle('checked');
    }
}

/**
 * Displayes edit menu when clicked on the edit button
 */
function showThemeMenu() {
    const popup = document.getElementById('popup');
    popup.style.display = 'block';
}

/**
 * Hide edit menu when clicked on the close button
 */
function hideThemeMenu() {
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

/**
 * Changes body font depending on what font
 * is selected in the font drop down menu
 */
function changeFont() {
    if (fontFamily.value === 'poppins') {
        document.body.style.fontFamily = "poppins";
        input.style.fontFamily = "poppins";
    } else if (fontFamily.value === 'oswald') {
        document.body.style.fontFamily = "oswald";
        input.style.fontFamily = "oswald";
    } else {
        document.body.style.fontFamily = "montserrat";
        input.style.fontFamily = "montserrat";
    }
}

