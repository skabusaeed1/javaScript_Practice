import navbar from "./navbar.js";
let navbar_V = document.getElementById("navbar-1");
navbar_V.innerHTML = navbar();

var id = JSON.parse(localStorage.getItem("viewID"));

window.onload = async () => {
  try {
    let res = await fetch(`http://localhost:3000/posts/${id}`);
    let data = await res.json();
    console.log(data);
    displayData(data);
  } catch (error) {
    console.log(error)
  }
};

function displayData(data) {
  document.getElementById("main-view").textContent = "";

  let title = document.createElement("h2");
  title.textContent = "Title:-" + data.title;

  let body = document.createElement("h4");
  body.textContent = data.body;

  let author = document.createElement("b");
  author.textContent = "Author:-" + data.author;

  let date = document.createElement("p");
  date.textContent = "Created Date:-" + data.created_date;

  document.getElementById("main-view").append(title, body, author, date);
}
