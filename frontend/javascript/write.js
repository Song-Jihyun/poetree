// subject를 입력하고 enter를 누르면 title로 커서가 이동하도록
function subject_enter() {
    if (window.event.keyCode == 13) {
        event.preventDefault();
        document.getElementsByName("title")[0].focus();
    }
}

// title을 입력하고 enter를 누르면 poetry(내용 입력)로 커서가 이동하도록
function title_enter() {
    if (window.event.keyCode == 13) {
        event.preventDefault();
        document.getElementsByName("poetry")[0].focus();
    }
}

//textarea resize
var textarea = document.getElementsByTagName("textarea")[0];
function resize_textarea() {
    var str = textarea.value;
    var cols = textarea.cols;

    var linecount = 0;
    for(var l in str.split("\n")) {
        linecount += Math.ceil( l.length / cols ); // Take into account long lines
    }
    textarea.style.height = (linecount+1)*19 + "px"; // 라인 수 * 글씨 한 줄의 높이만큼 textarea height 조절
}

window.addEventListener("keydown", (e) => resize_textarea());
resize_textarea();