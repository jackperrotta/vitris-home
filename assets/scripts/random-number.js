var number = Math.floor(Math.random() * 4) + 1;  // returns a random integer from 1 to 4
console.log(number);
getClass(number);

function getClass(number){
    var selectedClass = document.getElementsByClassName("header-"+number);
    console.log(selectedClass);
    selectedClass.style.display = 'flex';
    
}