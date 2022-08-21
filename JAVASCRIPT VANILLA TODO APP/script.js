itemsTab = [];

const itemsContent = document.querySelector('.items'); 


let taskValue = '';


itemsTab.forEach(el => {
    const itemDiv = document.createElement('div');
    itemDiv.textContent = el;
    itemsContent.appendChild(itemDiv);
});

function addTask(event){
    console.log(taskValue);
    const itemDiv = document.createElement('div');
    itemDiv.setAttribute('class', 'item')
    const deleteButton = document.createElement('i');
    deleteButton.setAttribute('class', 'fa fa-pen')
    itemsContent.appendChild(itemDiv);
    event.preventDefault();
}

function getTaskName(event){
    taskValue = event.target.value;
}