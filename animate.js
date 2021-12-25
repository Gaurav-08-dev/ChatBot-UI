
document.addEventListener('DOMContentLoaded',()=>{
const chat_box = document.getElementById('chatbox-support');
const upperbox = document.querySelector('.upper-half');
const heading = document.querySelector('.heading');
const greeting = document.querySelector('.greeting');
const desc = document.querySelector('.desc');
const indicator = document.querySelector('.indicator');
const indicatorimg = document.querySelector('.indicator > img');


const floating = document.querySelector('.floating-above')
const floatingContentpara = document.querySelector('.floating-above > .content > p')
const floatingQuestions = document.querySelectorAll('.question');
const button = document.querySelector('.content > button');


function animation(){
setTimeout(colorUpperBox, 2000);
function colorUpperBox() {
    upperbox.style.opacity = 1;
    setTimeout(bringheadindicate, 2000);
}

function bringheadindicate() {
    heading.style.opacity = 1;
    greeting.style.opacity = 1;
    desc.style.opacity = 1;
    indicator.style.opacity = 1;
    setTimeout(bringFloating, 1000);
}

function bringFloating() {
    indicatorimg.style.animation="changeScale 1s ease 1";
    floating.style.opacity = 1;
    floatingContentpara.style.opacity = 1;
    setTimeout(bringq1, 2000);
}

function bringq1() {
    floatingQuestions[0].style.opacity = 1
    setTimeout(bringq2, 2000)
}


function bringq2() {
    floatingQuestions[1].style.opacity = 1
    setTimeout(bringq3, 2000)
}

function bringq3() {
    floatingQuestions[2].style.opacity = 1
    setTimeout(bringq4, 2000)
}


function bringq4() {
    floatingQuestions[3].style.opacity = 1
    setTimeout(bringbutton, 2000)
}

function bringbutton() {
    button.style.opacity = 1;
}
}

animation();
})