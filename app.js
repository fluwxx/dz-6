//todolist
const createButton = document.querySelector('#create_button');
const input = document.querySelector('#input');
const todoList = document.querySelector('.todo_list');

const createTodo = () => {
    if (input.value.trim() === '') {
        return alert('Произошла ошибка, введите какой-нибудь текст');
    }

    const div = document.createElement('div');
    div.setAttribute('class', 'block_text');

    const divButton = document.createElement('div');
    divButton.setAttribute('class', 'div_button');

    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('class', 'delete_button');
    deleteButton.innerText = 'DELETE';

    const editButton = document.createElement('button');
    editButton.setAttribute('class', 'edit_button');
    editButton.innerText = 'EDIT';

    const text = document.createElement('h3');
    text.innerText = input.value;

    const editText = document.createElement('input');
    editText.setAttribute('type', 'text');
    editText.style.display = 'none'; // Initially hide input field

    editButton.onclick = () => {
        text.style.display = 'none';
        editText.value = text.innerText;
        editText.style.display = 'block';
    };

    editText.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            text.innerText = editText.value;
            text.style.display = 'block';
            editText.style.display = 'none';
        }
    });

    deleteButton.onclick = () => {
        div.remove();
    };

    divButton.append(deleteButton, editButton);
    div.append(text, editText, divButton);

    todoList.prepend(div);
    input.value = '';
};

createButton.onclick = () => createTodo();

window.onkeydown = (event) => {
    if (event.code === 'Enter') {
        createTodo();
    }
}






























