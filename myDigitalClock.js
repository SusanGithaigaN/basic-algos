function myDigitalClock() {
    var d1 = new Date();
    var hours = d1.getHours(); // 0 - 23
    var minutes = d1.getMinutes(); // 0 - 59
    var seconds = d1.getSeconds(); // 0 - 59
    var zone = "AM";

    // Convert to 12-hour format and determine if time zone is in AM/PM
    if (hours >= 12) {
        zone = "PM";
        hours = hours - 12;
    }

    // ensure that 12-hour format does not display as 0
    if (hours === 0) {
        hours = 12;
    }
    // add 0 to minutes below 10
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    // add 0 to seconds below 10
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // combine time in hours, minutes and seconds 
    let time = hours + ":" + minutes + ":" + seconds + " " + zone;
    // output
    console.log(time);
}

myDigitalClock();
setInterval(myDigitalClock, 1000);
// sample output:
    // 10:17:14 PM
    // 10:17:15 PM
    // 10:17:16 PM
    // 10:17:17 PM

