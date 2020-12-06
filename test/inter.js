window.onload = function () {
  var btn = document.getElementById('btn');

  function display() {
    document.getElementById("myDiv").style.border = "solid red";
  }
  btn.onclick = () => {
    myDivStyle = document.getElementById("myDiv").style
    myDivStyle.color = "crimson"
    myDivStyle.border = "5px solid green"



  };
  //btn.addEventListener('click', display)
}