var page = 1;
async function fetchData() {
  try {
    url = `https://jsonmock.hackerrank.com/api/football_matches?page=${page}&limit=10`;
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.data);
    return data.data;
  } catch (error) {
    console.log(error);
  }
}

getData();
async function getData() {
  try {
    let res = await fetchData();
    displayData(res);
  } catch (error) {
    console.log(error);
  }
}

function displayData(res) {
  document.querySelector("tbody").textContent = "";
  res.map(function (elem, index) {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.textContent = elem.competition;

    let td2 = document.createElement("td");
    td2.textContent = elem.year;

    let td3 = document.createElement("td");
    td3.textContent = elem.round;

    let td4 = document.createElement("td");
    td4.textContent = elem.team1;

    let td5 = document.createElement("td");
    td5.textContent = elem.team2;

    let td6 = document.createElement("td");
    td6.textContent = elem.team1goals;

    let td7 = document.createElement("td");
    td7.textContent = elem.team2goals;

    tr.append(td1, td2, td3, td4, td5, td6, td7);
    document.querySelector("tbody").append(tr);
  });
}

document.getElementById("next").addEventListener("click", nextPage);
function nextPage() {
  page++;
  getData();
}

document.getElementById("prev").addEventListener("click", prevPage);
function prevPage() {
  if (page > 1) {
    page--;
    getData();
  }
}

let filter = document.getElementById("filter");
filter.onclick = () => {
  location.href = "Filter.html";
};
