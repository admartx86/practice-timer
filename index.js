function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = formatTime(m);
    s = formatTime(s);
    document.getElementById('hms').innerHTML =
    h + ":" + m + ":" + s;
    var t = window.setTimeout(startTime, 1000);
    document.getElementById('t').innerHTML =
    t;
}

function formatTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

export { startTime };