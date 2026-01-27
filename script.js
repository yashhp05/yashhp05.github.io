function addTodo() {
  let input = document.getElementById("todoInput");
  let task = input.value;

  if (task === "") {
    alert("Please enter a task");
    return;
  }

  let li = document.createElement("li");
  li.textContent = task;

  let list = document.getElementById("todoList");
  list.appendChild(li);

  input.value = "";
}
