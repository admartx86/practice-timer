let counter = 0;

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = formatTime(m);
    s = formatTime(s);
    document.getElementById('current-time').innerHTML =
    h + ":" + m + ":" + s;
    document.getElementById('time-elapsed').innerHTML = counter++
    window.setTimeout(startTime, 1000);
}

function formatTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

export { startTime };