
/// Patrick Acheson

document.getElementById('mydivheader').ondblclick = button_click;
document.getElementById('mydivheader1').ondblclick = button_click;
document.getElementById('mydivheader2').ondblclick = button_click;
document.getElementById('mydivheader4').ondblclick = button_click;
document.getElementById('mydivheader6').ondblclick = button_click;
document.getElementById('mydivheader8').ondblclick = button_click;
document.getElementById('mydivheader10').ondblclick = button_click;

function toggleButton() {
    var bodyVar = document.getElementById("body-id");
    var titleVar = document.getElementById("title-id");

    bodyVar.classList.toggle("lightmode-body");
    titleVar.classList.toggle("lightmode-title");
} 

function restartPage() {
    location.reload();
}

function button_click() {
    let input = prompt("Enter your name to book table");
    if (input.length > 0 & input.length < 10) {
        this.innerText = input
        let amount = prompt("How many are booking for");
        if (amount > 10) {
            this.style.backgroundColor = "#FF6B4F";
        } else if (amount > 6){
            this.style.backgroundColor = "#FFE946";
        } else if (amount > 2){
            this.style.backgroundColor = "#F8FB79";
        } else {
            this.style.backgroundColor = "#92EF79";
        }
    } else {
        alert("enter a valid name")
        this.innerText = "unbooked"
    }
}

dragElement(document.getElementById(("mydiv")));
dragElement(document.getElementById(("mydiv1")));
dragElement(document.getElementById(("mydiv2")));
dragElement(document.getElementById(("mydiv4")));
dragElement(document.getElementById(("mydiv6")));
dragElement(document.getElementById(("mydiv8")));
dragElement(document.getElementById(("mydiv10")));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

