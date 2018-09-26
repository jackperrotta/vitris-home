var number = Math.floor(Math.random() * 4) + 1;  // returns a random integer from 1 to 4

var header1 = document.getElementsByClassName("header-1");
var header2 = document.getElementsByClassName("header-2");
var header3 = document.getElementsByClassName("header-3");
var header4 = document.getElementsByClassName("header-4");

setClasses();

function setClasses(){
    var selectedClass = document.getElementsByClassName("header-"+number);
    if(header1 === selectedClass){
        selectedClass[0].style.display = 'grid';
        header2[0].style.display = 'none'
        header3[0].style.display = 'none'
        header4[0].style.display = 'none'
    } else if(header2 === selectedClass){
        selectedClass[0].style.display = 'grid';
        header1[0].style.display = 'none'
        header3[0].style.display = 'none'
        header4[0].style.display = 'none'
    } else if(header3 === selectedClass){
        selectedClass[0].style.display = 'grid';
        header1[0].style.display = 'none'
        header2[0].style.display = 'none'
        header4[0].style.display = 'none'
    } else if(header4 === selectedClass){
        selectedClass[0].style.display = 'grid';
        header1[0].style.display = 'none'
        header2[0].style.display = 'none'
        header3[0].style.display = 'none'
    }
}