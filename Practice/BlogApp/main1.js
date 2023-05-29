var timeId;
function onSearch(event) {
  const searchTerm = event.target.value;
  if (timeId) {
    clearTimeout(timeId);
  }
  timeId = setTimeout(() => {
    fetchData(searchTerm);
  }, 1000);
}

async function fetchData(searchTerm) {
  try {
    let url = `http://localhost:3000/posts`;
    searchTerm ? (url += `?q=${searchTerm}`) : url;
    var res = await fetch(url);
    let data = await res.json();
    console.log(data);
    displayData(data);
  } catch (error) {
    console.log(error);
  }
}

fetchData();

function displayData(arr) {
  document.querySelector("tbody").textContent = "";
  arr.map((elem) => {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.textContent = elem.id;

    let td2 = document.createElement("td");
    td2.textContent = elem.created_date;

    let td3 = document.createElement("td");
    td3.textContent = elem.title;

    let td4 = document.createElement("td");
    td4.textContent = elem.author;

    let td5 = document.createElement("td");
    let btn1 = document.createElement("button");
    btn1.textContent = "VIEW";
    btn1.onclick = () => {
      location.href = "view.html";
      localStorage.setItem("viewID", elem.id);
    };
    td5.append(btn1);

    let td6 = document.createElement("td");
    let btn2 = document.createElement("button");
    btn2.textContent = "EDIT";
    btn2.onclick = () => {
      location.href = "edit.html";
      localStorage.setItem("editID", elem.id);
    };
    td6.append(btn2);

    let td7 = document.createElement("td");
    let btn3 = document.createElement("button");
    btn3.textContent = "DELETE";
    btn3.onclick = () => {
      deleteData(elem.id);
    };
    td7.append(btn3);

    tr.append(td1, td2, td3, td4, td5, td6, td7);
    document.querySelector("tbody").append(tr);
  });
}

async function deleteData(id) {
  try {
    await fetch(`http://localhost:3000/posts/${id}`, {
      method: "DELETE",
    });
    fetchData();
  } catch (error) {
    console.log(error);
  }
}
