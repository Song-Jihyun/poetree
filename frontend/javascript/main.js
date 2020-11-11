//explain icon
var explain_icon = document.getElementsByClassName("explain-icon")[0];
var explain_text = document.getElementsByClassName("explain-text")[0];

explain_icon.addEventListener("mouseover", mouseOver);
explain_icon.addEventListener("mouseout", mouseOut);

function mouseOver() {
    explain_text.style.display = "block"; // icon 위에 마우스가 있으면 text 보이게
}
function mouseOut() {
    explain_text.style.display = "none"; // icon 위에 마우스가 없으면 text 안보이게
}