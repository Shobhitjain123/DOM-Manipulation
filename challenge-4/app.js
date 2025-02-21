/**
 * Write your challenge solution here
 */

const taskInput = document.getElementById("taskInput")
const addButton = document.getElementById('addButton')
const emptyList = document.querySelector('.empty-list')
const taskList = document.getElementById('taskList')
const totalTask = document.getElementById('totalTasks')
const completedTasks = document.getElementById('completedTasks')

let taskCount = 0
let completeCount = 0

function checkEmptyList(){
    if(taskCount === 0){
        emptyList.style.display = "block"
    }else{
        emptyList.style.display = 'none'
    }
}

addButton.addEventListener("click", () => {

    if(taskInput.value.trim() === "") return

    const li = document.createElement('li')
    li.setAttribute('class', 'task-item')

    const input = document.createElement('input')
    input.setAttribute('type', 'checkbox')
    input.setAttribute('class', 'complete-checkbox')

    const textContent = document.createElement('span')
    textContent.setAttribute('class', 'task-text')
    textContent.innerText = taskInput.value

    const btnDelete = document.createElement('button')
    btnDelete.setAttribute('class', 'delete-button')
    btnDelete.innerText = "Delete"

    li.appendChild(input)
    li.appendChild(textContent)
    li.appendChild(btnDelete)

    taskCount++
    taskList.appendChild(li)
    
    totalTask.innerText = `Total tasks: ${taskCount}`
    taskInput.value = ""

    checkEmptyList()

    btnDelete.addEventListener('click', () => {
        li.remove()
        taskCount--
        totalTask.innerText = `Total tasks: ${taskCount}`
        if(input.checked){
            completeCount--
            completedTasks.innerText = `Completed: ${completeCount}`
        }
        checkEmptyList()
    })

    input.addEventListener("change", function() {
        if(this.checked){
            li.classList.add("completed")
            completeCount++
            
        }else {
            li.classList.remove("completed")
            completeCount--
            
        }

        completedTasks.innerText = `Completed: ${completeCount}`

    })

})
checkEmptyList()
