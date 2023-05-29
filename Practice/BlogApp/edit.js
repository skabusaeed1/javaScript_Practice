import navbar from "./navbar.js";
let navbar_E = document.getElementById("navbar-1");
navbar_E.innerHTML = navbar();

var id = localStorage.getItem("editID");

async function fetchData() {
  try {
    let res = await fetch(`http://localhost:3000/posts/${id}`);
    let data = await res.json();
    displayData(data);
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchData();

function displayData(data) {
  document.getElementById("title").value = data.title;
  document.getElementById("blog").value = data.body;
  document.getElementById("author").value = data.author;
  document.getElementById("date").value = data.created_date;
}

document.getElementById("btn").addEventListener("click", addData);

async function addData() {
  try {
    let title = document.getElementById("title").value;
    let body = document.getElementById("blog").value;
    let author = document.getElementById("author").value;
    let created_date = document.getElementById("date").value;
    let dataObj = {
      title: title,
      body: body,
      author: author,
      created_date: created_date,
    };
    await fetch(`http://localhost:3000/posts/${id}`, {
      method: "PUT",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(dataObj),
    });
    location.href = "main.html";
  } catch (error) {
    console.log(error);
  }
}
