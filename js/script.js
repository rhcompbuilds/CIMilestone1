var dropdown = document.getElementsByClassName("dropdown");
var attribute;
var myFunction = function() {
attribute = this.getAttribute("data-target");
    var x = document.getElementById(attribute);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
  
};
for (var i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener('click', myFunction, false);
}