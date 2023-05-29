import navbar from "./navbar.js";
let navbar_1 = document.getElementById("navbar-1");
navbar_1.innerHTML = navbar();

console.log("HI");
document.getElementById("btn").addEventListener("click", addData);

async function addData() {
  try {
    let title = document.getElementById("title").value;
    let blog = document.getElementById("blog").value;
    let author = document.getElementById("author").value;
    let date = document.getElementById("date").value;

    let dataObj = {
      title: title,
      blog: blog,
      author: author,
      date: date,
    };
    console.log(dataObj);
    await fetch(`http://localhost:3000/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataObj),
    });
    location.href = "main.html";
  } catch (error) {
    console.log(error);
  }
}
