
document.querySelector("form").addEventListener("submit",displayData);

var dataArr=JSON.parse(localStorage.getItem("contact-list"))||[];

function displayData(){
    let dataObj={
        name:document.getElementById("name").value,
        desc:document.getElementById("desc").value,
        Date:document.getElementById("addDate").value,
        phone:document.getElementById("phone").value,
        email:document.getElementById("email").value,
        type:document.getElementById("type").value,
    }
  dataArr.push(dataObj);
  localStorage.setItem("contact-list",JSON.stringify(dataArr));
}