document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.addEventListener("submit", function(event) {
    event.preventDefault();

    let inputValue = document.getElementById("new-task-description").value;
    let dueDate = document.getElementById("due-date").value;
    let toDoList = document.getElementById("list");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(inputValue + " due on " + dueDate));
    toDoList.appendChild(li);

  });

});
