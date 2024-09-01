let count = document.getElementById("count");
re();
function dec() {
    count.value = --count.value;
    check();
}
function re() {
    count.value = 0;
    check();
}
function inc() {
    count.value = ++count.value;
    check();
}
function check() {
    if(count.value < 0){
        count.style.color = "red";
    }
    else if(count.value > 0) {
        count.style.color = "green";
    }
    else {
        count.style.color = "black";
    }
}