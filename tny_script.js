"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Ryan Wahl
   Date:   2.5.19

*/
//
// window.alert("Welcome to Tulsa ");
document.getElementById('dateNow').innerHTML = 'm/d/y<br />h:m:s';
document.getElementById("days").textContent = "dd";
document.getElementById("hrs").textContent = "hh";
document.getElementById("mins").textContent = "mm";
document.getElementById("secs").textContent = "ss";

// Exectue the function to run and display the countdown clock.
runClock();
setInterval("runClock()", 1000);

// Function to create the countdown clock.
function runClock() {
    // Gets the current date.
    var currentDay = new Date();

    // Gets the local date and time.
    var dateStr = currentDay.toLocaleDateString();
    var timeStr = currentDay.toLocaleTimeString();

    // Sets the date value at the top left corner.
    document.getElementById("dateNow").innerHTML = dateStr + "<br />" + timeStr;

    /* Display the time left until New Year’s Eve */

    /* Calculate the days until January 1st */
    var newYear = new Date("January 1, 2020");

    var nextYear = currentDay.getFullYear() + 1;
    newYear.setFullYear(nextYear);

    // Calculates the days and hours left.
    var daysLeft = (newYear - currentDay) / (1000 * 60 * 60 * 24);
    var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;

    // Applies the days and hours.
    document.getElementById("days").textContent = Math.floor(daysLeft);
    document.getElementById("hrs").textContent = Math.floor(hrsLeft);

    // Calculate the minutes and seconds left.
    var minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
    var secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;

    // Sets the minutes and seconds left.
    document.getElementById("mins").textContent = Math.floor(minsLeft);
    document.getElementById("secs").textContent = Math.floor(secsLeft);

}