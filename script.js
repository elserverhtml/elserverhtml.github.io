function nextpage(numpage) {
    var page = document.getElementById("Ar" + (numpage + 1));
    page.style.transform = "translate(-100%)";
    var progres = document.getElementsByClassName("currentprogres")[0];
    progres.style.transform = "translate(" + (100 * numpage) + "%)";
}

function prevpage(numpage) {
    var page = document.getElementById("Ar" + numpage);
    page.style.transform = "translate(0)";
    var progres = document.getElementsByClassName("currentprogres")[0];
    progres.style.transform = "translate(" + (100 * (numpage - 2)) + "%)";
}

var RightAnswer = [
    [3, false], [2, false],
    [4, false], [1, false],
    [2, false], [2, false],
    [1, false], [4, false],
    [1, false], [4, false],
    [3, false], [1, false],
    [1, false], [1, false],
    [2, false], [3, false],
    [3, false], [1, false],
    [4, false], [1, false]
];

function isRight(nQuestion, nAnswer) {
    var elems = document.querySelectorAll(".answer");
    if (RightAnswer[nQuestion][0] === nAnswer) {
        elems[nQuestion * 4 + nAnswer - 1].style.background = "#36ff45";
        RightAnswer[nAnswer][1] = true;
    } else {
        elems[nQuestion * 4 + nAnswer - 1].style.background = "#ff3636";
        RightAnswer[nAnswer][1] = false;
        elems[nQuestion * 4 + RightAnswer[nQuestion][0] - 1].style.background = "#36ff45";
    }
    for(let i = 0; i < 4; i++){
        elems[nQuestion * 4 + i].onclick = function(){};
    }
    setTimeout(function(){
        elems = document.querySelectorAll(".questionBody");
        elems[nQuestion+1].style.transform = "translateY(-100%)";
    }, 1000)
}

document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".answer");
    for (let i = 0; i < elems.length; i++) {
        elems[i].onclick = function () {
            isRight(Math.floor(i/4), i%4 + 1);
        }
    }
});