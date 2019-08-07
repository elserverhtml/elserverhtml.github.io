function btnNextPage(numpage) {
    var page = document.getElementById("Ar" + (numpage + 1));
    page.style.transform = "translate(-100%)";
    var progres = document.getElementsByClassName("currentprogres")[0];
    progres.style.transform = "translate(" + (100 * numpage) + "%)";
}

function btnPrevPage(numpage) {
    var page = document.getElementById("Ar" + numpage);
    page.style.transform = "translate(0)";
    var progres = document.getElementsByClassName("currentprogres")[0];
    progres.style.transform = "translate(" + (100 * (numpage - 2)) + "%)";
}

var RightAnswer = [
    [3, 0], [2, 0],
    [4, 0], [1, 0],
    [2, 0], [2, 0],
    [1, 0], [4, 0],
    [1, 0], [4, 0],
    [3, 0], [1, 0],
    [1, 0], [1, 0],
    [2, 0], [3, 0],
    [3, 0], [1, 0],
    [4, 0], [1, 0]
];

function isRight(nQuestion, nAnswer) {
    var elems = document.querySelectorAll(".answer");
    if (RightAnswer[nQuestion][0] === nAnswer) {
        elems[nQuestion * 4 + nAnswer - 1].style.background = "#36ff45";
        RightAnswer[nQuestion][1] = nAnswer;
    } else {
        elems[nQuestion * 4 + nAnswer - 1].style.background = "#ff3636";
        RightAnswer[nQuestion][1] = nAnswer;
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
        
        if(elems.length - 5 >= i){
            elems[i].onclick = function () {
                isRight(Math.floor(i/4), i%4 + 1);
                getStat();
            }
        }
    }
    
    for (let i = 0; i < document.getElementsByClassName("morebtn").length; i++)
    document.getElementsByClassName("morebtn")[i].addEventListener("click", btnMore)
});

function btnMore() {
    var Height = "";
    var charsH = this.previousElementSibling.style.maxHeight.split('');
    for(let i = 0; i < charsH.length - 2; i++)
        Height += charsH[i];
    Height = Number.parseInt(Height);
    
    if(Height >= this.previousElementSibling.children.length*506) {
       Height = 506*2;
    } else if (Height < this.previousElementSibling.children.length*506 && Height > 0){
        Height += 506*2;
    } else {
        Height = 506*4;
    }
    
    if(Height >= this.previousElementSibling.children.length*506)
        this.firstChild.innerHTML = "&uarr; Свернуть &uarr;";
    else this.firstChild.innerHTML = "&darr; Развернуть &darr;";
    
    Height += "px";
    this.previousElementSibling.style.maxHeight = Height;
}

function getStat(){
    var statlist = document.getElementsByClassName("statYourAnswer");
    var answers = document.getElementsByClassName("answer");
    for(let i = 0; i < statlist.length; i++){
        statlist[i].innerHTML = answers[i * 4 + RightAnswer[i][1] - 1].firstChild.innerHTML;
        
        if(RightAnswer[i][0] == RightAnswer[i][1]){
            statlist[i].parentElement.parentElement.style.background = "#36ff45";
        }
    }
}







