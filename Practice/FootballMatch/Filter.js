var year = 2011;
var team1;
var team2;
async function fetchData() {
  url = `https://jsonmock.hackerrank.com/api/football_matches?year=${year}`;
  team1 ? (url += `&team1=${team1}`) : url;
  team2 ? (url += `&team2=${team2}`) : url;
  let res = await fetch(url);
  let data = await res.json();
  return data.data;
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

document.getElementById("year").addEventListener("change", changeYear);
function changeYear() {
  let val = document.getElementById("year").value;
  console.log(val);
  year = val;
  getData();
}

document.getElementById("team1").addEventListener("change", changeTeam1);
function changeTeam1() {
  let val = document.getElementById("team1").value;
  team1 = val;
  console.log(team1);
  getData();
}

document.getElementById("team2").addEventListener("change", changeTeam2);
function changeTeam2() {
  let val = document.getElementById("team2").value;
  team2 = val;
  console.log(team2);
  getData();
}
