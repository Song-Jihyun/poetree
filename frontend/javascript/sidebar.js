//sidebar
function sidebar_open() {
    document.getElementsByTagName("aside")[0].style.display = "flex"; // aside 보이게 하고
    document.getElementById("sidebar_toggle").setAttribute("onClick", "sidebar_close()"); // sidebar_toggle에 달린 함수를 close()로 변경
}

function sidebar_close() {
    document.getElementsByTagName("aside")[0].style.display = "none"; // aside 안보이게 하고
    document.getElementById("sidebar_toggle").setAttribute("onClick", "sidebar_open()"); // sidebar_toggle에 달린 함수를 open()으로 변경
}

window.addEventListener('resize', function(event){ // aside가 보이다가 화면 크기가 커져서 nav-tab에 바로 링크가 보이게 되면 aside 안보이게
    var newWidth = window.innerWidth;
    if(newWidth > 984) sidebar_close();
})