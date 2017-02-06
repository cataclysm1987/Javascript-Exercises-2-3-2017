

//Exercise 1 - date and time written out

function getDayOfWeek() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var n = weekday[d.getDay()];
    return n;
}

function displayDayOfWeek() {
    var d = new Date();
    document.getElementById('exercise-1-1').innerHTML = "Today is: " + getDayOfWeek();
}

function displayCurrentTimeFormatted() {
    var date = new Date();
    if (date.getHours() > 12) {
        var hoursFormatted = date.getHours() - 12;
        document.getElementById('exercise-1-2')
            .innerHTML = ("Current time is: " +
                hoursFormatted +
                " " +
                amOrPm() +
                " " +
                date.getMinutes() +
                " : " +
                date.getSeconds());
    } else {
        document.getElementById('exercise-1-2')
            .innerHTML = ("Current time is: " +
                date.getHours() +
                " " +
                amOrPm() +
                date.getMinutes() +
                " : " +
                date.getSeconds());
    }
    
}

function amOrPm() {
    var hours = new Date().getHours();
    var hours = (hours + 24 - 2) % 24;
    var mid = 'AM';
    if (hours == 0) { //At 00 hours we need to show 12 am
        hours = 12;
    }
    else if (hours > 12) {
        hours = hours % 12;
        mid = 'PM';
    }
    return mid;
}

function getHoursFormatted() {
    var d = new Date();
    var hours = getHours();
    if (hours > 12) {
        hours = hours - 12;
    }
    return hours;
}

//Exercise 2 functions

function Format3Dates() {
    document.getElementById("exercise-2-1").innerHTML = GetFormattedDate1();
    document.getElementById("exercise-2-2").innerHTML = GetFormattedDate2();
    document.getElementById("exercise-2-3").innerHTML = GetFormattedDate3();
}

function GetFormattedDate1() {
    var date = new Date();
    var year = date.getFullYear();
    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    return month + '-' + day + '-' + year;
}

function GetFormattedDate2() {
    var date = new Date();
    var year = date.getFullYear();
    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    return month + '/' + day + '/' + year;
}

function GetFormattedDate3() {
    var date = new Date();
    var year = date.getFullYear();
    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    return day + '/' + month + '/' + year;
}
