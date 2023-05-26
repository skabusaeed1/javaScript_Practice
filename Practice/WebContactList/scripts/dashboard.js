let Arr = JSON.parse(localStorage.getItem("contact-list")) || [];

displayData(Arr);

function filterData() {
  let val = (di = document.getElementById("filter").value);
  let select = Arr.filter(function (elem, index) {
    if (val == "") {
      return true;
    } else {
      return elem.type === val;
    }
  });
  displayData(select);
}

function displayData(ans) {
  document.querySelector("tbody").textContent = "";
  ans.map(function (elem, index) {
    let tr = document.createElement("tr");

    let name = document.createElement("td");
    name.textContent = elem.name;

    let desc = document.createElement("td");
    desc.textContent = elem.desc;

    let Date = document.createElement("td");
    Date.textContent = elem.Date;

    let phone = document.createElement("td");
    phone.textContent = elem.phone;

    let email = document.createElement("td");
    email.textContent = elem.email;

    let type = document.createElement("td");
    type.textContent = elem.type;

    let dele = document.createElement("td");
    dele.textContent = "Delete";
    dele.addEventListener("click", function () {
      deleteRow(elem, index);
    });

    tr.append(name, desc, Date, phone, email, type, dele);
    document.querySelector("tbody").append(tr);
  });
}

var deleteArr = JSON.parse(localStorage.getItem("deleted-data")) || [];
function deleteRow(elem, index) {
  deleteArr.push(elem);
  localStorage.setItem("deleted-data", JSON.stringify(deleteArr));
  Arr.splice(index, 1);
  displayData(Arr);
  localStorage.setItem("contact-list", JSON.stringify(Arr));
}
