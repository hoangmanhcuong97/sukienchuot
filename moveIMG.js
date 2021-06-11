let nhanvat = null;
function init(){
  nhanvat = document.getElementById("contra");
  nhanvat.style.position = "relative";
  nhanvat.style.left = "0px";
}
function moveRight (){
  nhanvat.style.left = parseInt(nhanvat.style.left) + 50 + "px";
  }
function moveLeft (){
  nhanvat.style.left = parseInt(nhanvat.style.left) - 50 + "px";
}
window.onload =init();
