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

function resize_textarea(textarea) {
    textarea.style.height = (20 + textarea.scrollHeight)+"px";
}