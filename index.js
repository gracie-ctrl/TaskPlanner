// const taskArr = [];
// let taskId = 1;

const taskManager = new TaskManager();

const btnSubmit = document.getElementById('submit_taskForm');
btnSubmit.addEventListener("click", addTask);

const btnReset = document.getElementById('reset_taskForm');
btnReset.addEventListener("click", resetTask);



function addTask() {
  console.log('add task');
  const taskName = document.getElementById('taskName').value;
  const taskDescription = document.getElementById('taskDescription').value;
  const assigneeName = document.getElementById('assigneeName').value;
  const taskDueDate = document.getElementById('taskDueDate').value;
  const taskStatus = document.getElementById('taskStatus').value;

  // const task = {
  //   id: taskId,
  //   name: taskName,
  //   description: taskDescription,
  //   assignee: assigneeName,
  //   dueDate: taskDueDate,
  //   status: taskTastus,
  // };

  // taskArr.push(task);
  // taskId += 1;

  const task = new Task(taskName, taskDescription, assigneeName, taskDueDate, taskStatus);
  taskManager.addTask(task);
  taskManager.displayTasks();

  console.log(taskManager.taskList);
}

function resetTask() {
  console.log('add task');
  document.getElementById('taskName').value = "";
  document.getElementById('taskDescription').value = "";
  document.getElementById('assigneeName').value = "";
  document.getElementById('taskDueDate').value = "";
  document.getElementById('taskStatus').value = "";

}


