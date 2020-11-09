function subject_enter() {
    if (window.event.keyCode == 13) {
        event.preventDefault();
        document.getElementsByName("title")[0].focus();
    }
}

function title_enter() {
    if (window.event.keyCode == 13) {
        event.preventDefault();
        document.getElementsByName("poetry")[0].focus();
    }
}

var textarea = document.getElementsByTagName("textarea")[0];
function resize_textarea() {
    var str = textarea.value;
    var cols = textarea.cols;

    var linecount = 0;
    for(var l in str.split("\n")) {
        linecount += Math.ceil( l.length / cols ); // Take into account long lines
    }
    textarea.style.height = (linecount+1)*19 + "px";
}

window.addEventListener("keydown", (e) => resize_textarea());
resize_textarea();