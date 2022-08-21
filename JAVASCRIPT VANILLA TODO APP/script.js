itemsTab = ['task1', 'task2', 'task3', 'task4'];

const itemsContent = document.querySelector('.items'); 


let taskValue = '';


// itemsTab.forEach((el, i) => {
//     const itemDiv = document.createElement('div');
//     itemDiv.setAttribute('class', 'item')
//     itemDiv.innerHTML = `<span>${el}</span> <i class="fa fa-trash" onClick='deleteTask(${i})' aria-hidden="true"></i>  <i class="fa fa-pen" onClick='updateTask(${i})' aria-hidden="true"></i>`;
//     // const deleteButton = document.createElement('i');
//     // deleteButton.setAttribute('class', 'fa fa-pen')
//     itemsContent.appendChild(itemDiv);
// });

function addTask(event){
    const itemDiv = document.createElement('div');
    itemDiv.setAttribute('class', 'item')
        itemDiv.setAttribute('class', 'item')

    itemDiv.innerHTML = `<span>${taskValue}</span> <i class="fa fa-trash" aria-hidden="true"></i>  <i class="fa fa-pen"  aria-hidden="true"></i>`;
    // const deleteButton = document.createElement('i');
    // deleteButton.setAttribute('class', 'fa fa-pen')
    itemsContent.appendChild(itemDiv);
    console.log(taskValue);
    itemsTab.push(taskValue);
    deleteBtn = itemDiv.children[1];
    updateBtn = itemDiv.children[2];
    console.log(deleteBtn.setAttribute);
    event.preventDefault();
    deleteBtn.addEventListener('click', function() {
        itemDiv.remove();
    })
    updateBtn.addEventListener('click', function() {
        console.log('update button');
    })
}

function getTaskName(event){
    taskValue = event.target.value;
}

function updateTask(el){
    taskValue = el;

}

// function deleteTask(event){
//   var x = document.getElementsByTagName("i")[0].parentElement;
//   x.remove();
// }