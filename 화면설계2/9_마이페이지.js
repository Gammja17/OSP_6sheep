var coin = 0;
document.getElementById("current").innerHTML = coin+ "원";

const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", click_btn1);

const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", click_btn2);

const btn3 = document.getElementById("btn3");
btn3.addEventListener("click", click_btn3);

function click_btn1() {
coin = coin + 1000;
alert("1000원이 충전되었습니다.");
document.getElementById("current").innerHTML = coin + "원";
}

function click_btn2() {
coin = coin + 10000;
alert("10000원이 충전되었습니다.");
document.getElementById("current").innerHTML = coin + "원";
}

function click_btn3() {
coin = coin + 50000;
alert("50000원이 충전되었습니다.");
document.getElementById("current").innerHTML = coin + "원";
}