const FORM = document.getElementById ('first_Form');
const INPUT = document.getElementById('Todo_input');
const BUTTON = document.getElementById('btn');
const UNLIST = document.getElementById('unlist');

function addTask(){
    const taskTest = INPUT.value.trim();
    if (taskTest !== ""){
        createTaskElement(taskTest);
        INPUT.value = '';
        INPUT.focus();
    }
}

BUTTON.addEventListener ('click',addTask);
INPUT.addEventListener('keypress', function(event){
    if(event.key ==='Enter'){
        event.preventDefault();
        addTask();
    }
});


function deleteTask(event){
    const listitem = event.target.parentElement;
    UNLIST.removeChild(listitem);
}

function createTaskElement(taskTest){
    const newTask = document.createElement('li');
    newTask.classList.add('LIST')
    const textContent = document.createTextNode(taskTest);
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Del';
    deleteButton.classList.add('botten2');

    deleteButton.addEventListener('click',deleteTask);
    newTask.appendChild(textContent);
    newTask.appendChild(deleteButton);
    UNLIST.appendChild(newTask);
    
}
