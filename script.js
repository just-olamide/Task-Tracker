const Task = [];


const newTask =document.getElementById("taskDescription");
const addTaskBtn = document.getElementById("addTaskButton");
const dropDown = document.getElementById("taskCategory");
// const taskList = document. getElementsById("tasklist");
const clearAll = document.getElementById("clearAllBtn");



 addTaskBtn.addEventListener("click", addTask);


function addTask() {
    const Task = newTask.value.trim();
    const category = dropDown.value;
    if (Task === ""){
        alert("must be a task");
        return;
    } 

    const addTask = document. getElementById("tasklist");
    const row =  addTask.insertRow()
    row.insertCell(0).innerText=Task;
    row.insertCell(1).innerText=category;
    row.insertCell(2).innerText=new Date().toLocaleString();

const completeCheck= row.insertCell(3);
const checkBox = document.createElement("input")
checkBox.type= "checkbox";
completeCheck.appendChild (checkBox);

    newTask.value = ""; 
}

 clearAll.addEventListener("click", function(){
let deleted = document.getElementById('tasklist');
deleted.style.display = 'none'
 })
