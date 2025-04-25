const newTask = document.getElementById("taskDescription");
const addTaskBtn = document.getElementById("addTaskButton");
const taskList = document.getElementById("tasklist");
const dropDown = document.getElementById("taskCategory");
const clearAll = document.getElementById("clearAllBtn");


//Load person from localstorage
let persons = JSON.parse(localStorage.getItem("persons")) || [];

//function to save to localestorage
function saveToLocalStorage() {
  localStorage.setItem("persons", JSON.stringify(persons));
}
// function to show user
function displayUser() {
  taskList.innerHTML = "";
  persons.forEach((user, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${user.taskDescription}</td>
      <td>${user.taskCategory}</td>
      <td>${new Date().toLocaleString()}</td>
      <td>
        <button onclick="viewUser(${index})">View</button>
        <button onclick="editUser(${index})">Edit</button>
        <button onclick="deleteUser(${index})">Delete</button>
      </td>
    `;
    taskList.appendChild(row);
  });
}


//Add user(create user and update user)

addTaskBtn.addEventListener("click", () => {
  const Task = newTask.value.trim();
  const category = dropDown.value.trim();

  if (Task === "" || category === "") {
    alert("Please enter a task and select a category.");
    return;
  }

  persons.push({ taskDescription: Task, taskCategory: category });
  saveToLocalStorage();
  displayUser();
  newTask.value = "";
  dropDown.value = "";
});

function deleteUser(index) {
  if (confirm("Are you sure?")) {
    persons.splice(index, 1);
    saveToLocalStorage();
    displayUser();
  }
}

function viewUser(index) {
  alert(`Task: ${persons[index].taskDescription}\nCategory: ${users[index].taskCategory}`);
}

function editUser(index) {
  newTask.value = persons[index].taskDescription;
  dropDown.value = persons[index].taskCategory;
  persons.splice(index, 1); 
  saveToLocalStorage();
  displayUser();
}

clearAll.addEventListener("click", () => {
  if (confirm("Clear all tasks?")) {
    persons = [];
    saveToLocalStorage();
    displayUser();
  }
});

displayUser(); 

