const todosField = document.getElementById("todoField");
const todoList = document.getElementById("todo-list");

document.querySelector('#todoApp').addEventListener("submit", function(event) {
  event.preventDefault();
  const input = document.querySelector('input[type="text"]');
  const todo = input.value
  if (todo) {
    const li = document.createElement("li");
    li.textContent = todo;
    const checkButton = document.createElement("button");
    checkButton.textContent = "Complete Todo";
    checkButton.addEventListener("click", function() {
      li.classList.toggle("completed");
    });
    li.appendChild(checkButton);
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete Todo";
    deleteButton.addEventListener("click", function() {
      todoList.removeChild(li);
    });
    li.appendChild(deleteButton);
    todoList.appendChild(li)
    input.value = "";
    }
});