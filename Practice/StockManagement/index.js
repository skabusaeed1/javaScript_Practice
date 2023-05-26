document.querySelector("form").addEventListener("submit", showData);
var Total = 0;
function showData() {
  event.preventDefault();
  let company = document.getElementById("name").value;
  let price = parseInt(document.getElementById("price").value);
  let quantity = parseInt(document.getElementById("quantity").value);
  let category = document.getElementById("category").value;

  if (company == "" || isNaN(price) || isNaN(quantity) || category == "") {
    alert("Please fill in all fields.");
    return;
  }

  let tr = document.createElement("tr");

  let td1 = document.createElement("td");
  td1.textContent = company;

  let td2 = document.createElement("td");
  td2.textContent = price;

  let td3 = document.createElement("td");
  td3.textContent = quantity;

  let td4 = document.createElement("td");
  td4.textContent = category;

  let total = price * quantity;
  Total += total;

  let td5 = document.createElement("td");
  td5.textContent = total;

  let td6 = document.createElement("td");
  td6.textContent = "Delete";
  td6.addEventListener("click", deleteRow);

  document.querySelector("span").innerHTML = Total;

  tr.append(td1, td2, td3, td4, td5, td6);
  document.querySelector("tbody").append(tr);
}

function deleteRow() {
  Total -= parseInt(event.target.parentNode.querySelector("td:nth-child(5)").textContent);
  event.target.parentNode.remove();
  document.querySelector("span").innerHTML = Total;
}
