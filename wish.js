let wishinput = document.getElementById('input')
let wishbtn = document.getElementById('btn')
let showtodo = document.getElementById('empty')
let todo;

let localData = JSON.parse(localStorage.getItem('todo'))
let todoList = localData || []

function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (param){
        let number = Math.random()*16 | 0;
        let randomNumber = param == 'x' ? number : (number & 0x3 | 0x8);
        return randomNumber.toString(16)
    });
}

wishbtn.addEventListener("click",(e)=>{
    e.preventDefault()
    todo = wishinput.value
    console.log(todo);
    if(todo.length > 0){
        todoList.push({id:uuid(),todo, isCompleted: false})
        // todoList.push(todo)
    }renderTodo(todoList);
    localStorage.setItem("todo", JSON.stringify(todoList))
    wishinput.value = ''
})

showtodo.addEventListener("click",(e)=>{
    // console.log('cliked');
    // console.log(key);
    // console.log(e.target);
    let key = e.target.dataset.key;
    let deletetodo = e.target.dataset.todokey
    todoList = todoList.map( todo => todo.id === key ? {...todo,isCompleted : !todo.isCompleted}:todo)
    todoList  = todoList.filter(todo => todo.id !== deletetodo)
    localStorage.setItem("todo", JSON.stringify(todoList))

    renderTodo(todoList)
    console.log(todoList);
})

function renderTodo(todoList){
    console.log(todoList);
    showtodo.innerHTML = todoList.map(({id, todo , isCompleted}) => 
    ` <div class="todo relative">
        <input class="t-checkbox t-pointer" id="item-${id}" type="checkbox" data-key=${id} ${isCompleted ? "checked": ""} >
        <label for="item-${id}" class="todo todo-text t-pointer ${isCompleted ? "checked-todo" : ""}" data-key=${id}>${todo}</label>
        <button class="absolute right-0 button cursor"> 
            <span data-todokey=${id} class="del-btn material-icons-outlined">delete</span>
        </button>
    </div>`)
}
renderTodo(todoList)
