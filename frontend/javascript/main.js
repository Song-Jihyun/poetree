var explain_icon = document.getElementsByClassName("explain-icon")[0];
var explain_text = document.getElementsByClassName("explain-text")[0];

explain_icon.addEventListener("mouseover", mouseOver);
explain_icon.addEventListener("mouseout", mouseOut);

function mouseOver() {
    explain_text.style.display = "block";
}
function mouseOut() {
    explain_text.style.display = "none";
}