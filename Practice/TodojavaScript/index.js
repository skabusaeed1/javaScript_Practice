document.querySelector("form").addEventListener("submit", displayData);

var dataArr = JSON.parse(localStorage.getItem("main-data")) || [];

function displayData() {
  event.preventDefault();
  let task = document.getElementById("task").value;
  let Priority = document.getElementById("Priority").value;
  var dataobj = {
    task: task,
    Priority: Priority,
  };
  dataArr.push(dataobj);
  localStorage.setItem("main-data", JSON.stringify(dataArr));
  showData();
}

function showData() {
  document.querySelector("tbody").textContent = "";
  dataArr.map((elem, index) => {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.textContent = elem.task;

    let td2 = document.createElement("td");
    if (elem.Priority == "Low") {
      td2.style.backgroundColor = "red";
      td2.textContent = elem.Priority;
    }
    if (elem.Priority === "High") {
      td2.style.backgroundColor = "green";
      td2.textContent = elem.Priority;
    }

    let td3 = document.createElement("td");
    td3.textContent = "Delete";
    td3.addEventListener("click", () => {
      deleteRow(index);
    });

    tr.append(td1, td2, td3);
    document.querySelector("tbody").append(tr);
  });
}

function deleteRow(index) {
  dataArr.splice(index, 1);
  localStorage.setItem("main-data", JSON.stringify(dataArr));
  showData();                             
}
