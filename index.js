const btnLike1 = document.getElementById("btnLike1");
const btnDislike1 = document.getElementById("btnDislike1");
const btnLike2 = document.getElementById("btnLike2");
const btnDislike2 = document.getElementById("btnDislike2");
const countLike1 = document.getElementById("countLike1");
const countDislike1 = document.getElementById("countDislike1");
const countLike2 = document.getElementById("countLike2");
const countDislike2 = document.getElementById("countDislike2");

function clickLike1() {
    let totalLike1 = parseInt(countLike1.textContent) + 1;
    countLike1.textContent = totalLike1.toString();
} 
function clickDislike1() {
    let totalDislike1 = parseInt(countDislike1.textContent) + 1;
    countDislike1.textContent = totalDislike1.toString();
} 
function clickLike2() {
    let totalLike2 = parseInt(countLike2.textContent) + 1;
    countLike2.textContent = totalLike2.toString();
} 
function clickDislike2() {
    let totalDislike2 = parseInt(countDislike2.textContent) + 1;
    countDislike2.textContent = totalDislike2.toString();
} 
btnLike1.addEventListener("click", clickLike1);
btnDislike1.addEventListener("click", clickDislike1);
btnLike2.addEventListener("click", clickLike2);
btnDislike2.addEventListener("click", clickDislike2);

const submit = document.getElementById("submit");
const comment = document.getElementById("comment");
const commentbox = document.getElementById("commentbox");
function submitComment() {
    commentbox.textContent += comment.value.toString() + "\n";
    comment.value="";
} 
submit.addEventListener("click", submitComment);
