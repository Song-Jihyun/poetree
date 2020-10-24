function sidebar_open() {
    document.getElementsByTagName("aside")[0].style.display = "flex";
    document.getElementById("sidebar_toggle").setAttribute("onClick", "sidebar_close()");
}

function sidebar_close() {
    document.getElementsByTagName("aside")[0].style.display = "none";
    document.getElementById("sidebar_toggle").setAttribute("onClick", "sidebar_open()");
}