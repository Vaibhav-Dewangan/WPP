// Write a JavaScript program to display the current day and time in the following format.

// Sample Output :

// Today is: Tuesday.
// Current time is: 10 PM:30 : 38

//To get current date and time
let currentDate = new Date();
//To get day of the week
let daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let day = daysOfWeek[currentDate.getDay()];
//To get current time 
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();
//convert hours to AM/PM format
let period = hours >= 12 ? "PM":"AM";
//Adjust hours to 12 hours format
if(hours > 12){
     hours = hours % 12;
 };
//Adding zeros to minutes and seconds
minutes = minutes < 10 ? "0"+ minutes : minutes;
seconds = seconds < 10 ? "0"+ seconds : seconds;
//Output
console.log("Today is : "+ day + ".");
console.log("Current time is : "+ hours +" "+ period +" "+ ":" + minutes +" "+ ":" + seconds);
