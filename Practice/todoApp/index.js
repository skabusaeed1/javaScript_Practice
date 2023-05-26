function addTodo() {
  let input = document.getElementById("input").value;
  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  td1.textContent = input;

  let td2 = document.createElement("td");
  td2.textContent = "Delete";
  td2.addEventListener("click", deleteTodo);

  tr.append(td1, td2);
  document.querySelector("tbody").append(tr);
  document.getElementById("input").value = "";
}

function deleteTodo(event) {
  event.target.parentNode.remove();
}
