var counter = 0;
function Increase() {
  counter++;
  document.getElementById("counter").textContent = counter;
}

function Decrease() {
  if(counter==0){
    counter=0;
  }else{
    counter--;
  document.getElementById("counter").innerText = counter;
  }
}

function Reset() {
  counter = 0;
  document.getElementById("counter").innerText = counter;
}
