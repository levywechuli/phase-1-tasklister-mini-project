document.addEventListener("DOMContentLoaded", () => {
 const form = document.getElementById("create-task-form");

 const taskList = document.getElementById("tasks");

 const deleate = document.getElementById("btn");

 form.addEventListener("submit", (event) =>{
  event.preventDefault();

deleate.textContent = "Delete";
deleate.className = "delete-btn";




  const taskInput = document.getElementById("task Description");
  const taskDescription = taskInput.value.trim();

  if(taskDescription){
    const listItems = document.createElement("li");
    listItems.textContent = taskDescription;


    taskList.appendChild(listItems);

    taskInput.value = "";
  }else{
    alert("please enter a task description");
  }
 });


});
