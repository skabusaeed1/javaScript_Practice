let deleteData = JSON.parse(localStorage.getItem("deleted-data")) || [];

displayData();

function displayData() {
  deleteData.map(function (elem, index) {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.textContent = elem.name;

    let td2 = document.createElement("td");
    td2.textContent = elem.desc;

    let td3 = document.createElement("td");
    td3.textContent = elem.Date;

    let td4 = document.createElement("td");
    td4.textContent = elem.phone;

    let td5 = document.createElement("td");
    td5.textContent = elem.email;

    let td6 = document.createElement("td");
    td6.textContent = elem.type;

    tr.append(td1, td2, td3, td4, td5, td6);
    document.querySelector("tbody").append(tr);
  });
}
