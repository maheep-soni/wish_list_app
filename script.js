// let inputText = document.getElementById('input')
// inputText.addEventListener('click',addTask())

// function addTask() {
//     console.log('taks sdde');
// }

let taskCount = 0;
function addTask(){
    taskCount++;

    let inputValue = document.getElementById('input').value
    

    let taskList = document.getElementById('task');


    let taskItem = document.createElement('div');
    taskItem.innerHTML = `<p>${taskCount}. ${inputValue}</p><button onclick="deleteTask(this)">X</button>`;
    taskList.appendChild(taskItem);



  document.getElementById('input').value = ""
  
  

}

function deleteTask(button){
    let taskItem = button.parentElement;
    taskItem.remove();
}

// function undoDelete() {
//     if (deletedTasks.length > 0) {
//         let lastDeleted = deletedTasks.pop();
//         let taskList = document.getElementById('task');
//         let taskItem = document.createElement('div');
//         taskItem.id = lastDeleted.id;
//         taskItem.innerHTML = lastDeleted.content;

//         // Add the restored task back to the task list
//         taskList.appendChild(taskItem);
//     }
// }







