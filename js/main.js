let countDownDate = new Date("Jun 1, 2023 16:30:00").getTime();

let x = setInterval(function () {

    let now = new Date().getTime();

    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = days + ':' + hours + ':' + minutes + ':' + seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);

let join = document.getElementById("join");

let joinBtnSecond = document.getElementById("joinBtnSecond");

let clos = document.getElementsByClassName("close")[0];

joinBtn.onclick = function () {
    join.style.display = "block";
}

joinBtnSecond.onclick = function () {
    join.style.display = "block";
}

clos.onclick = function () {
    join.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == join) {
        join.style.display = "none";
    }
}

let get = document.getElementById("getTicket");

let getBtn = document.getElementById("getBtn");
let getBtnSecond = document.getElementById("getBtnSecond");

let span = document.getElementsByClassName("closse")[0];

getBtnSecond.onclick = function () {
    get.style.display = "block";
}

getBtn.onclick = function () {
    get.style.display = "block";
}

span.onclick = function () {
    get.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == get) {
        get.style.display = "none";
    }
}

$('header').on('mousemove', function (e) {
    let x = e.clientX - 20;
    let y = e.clientY - 20;
    let id = new Date();
    let sec = id.getSeconds();
    let min = id.getMinutes();
    let ms = id.getMilliseconds();
    let all = min + '' + sec + '' + ms;
    $('body').append('<div id=' + all + ' class="bubble"></div>');
    $('#' + all + '').css({
        'left': x,
        'top': y
    });
});