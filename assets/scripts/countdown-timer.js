 // Set the date we're counting down to
 var countDownDate = new Date("June 30, 2019 12:00:00").getTime();

 // Update the count down every 1 second
 var x = setInterval(function() {

 // Get todays date and time
 var now = new Date().getTime();

 // Find the distance between now an the count down date
 var distance = countDownDate - now;

 // Time calculations for days, hours, minutes and seconds
 var days = Math.floor(distance / (1000 * 60 * 60 * 24));
 var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
 var seconds = Math.floor((distance % (1000 * 60)) / 1000);

 // Display the result in an element
 // document.getElementById("timer").innerHTML = days + " days " + hours + " hours "
 // + minutes + " mins " + seconds + " s ";

 document.getElementById("timerDays").innerHTML = days;
 document.getElementById("timerHours").innerHTML = hours;
 document.getElementById("timerMinutes").innerHTML = minutes;
 document.getElementById("timerSeconds").innerHTML = seconds;

 // If the count down is finished, write some text
 if (distance < 0) {
     clearInterval(x);
     document.getElementById("timer").innerHTML = "The deal has ended :(";
 }
 }, 1000);