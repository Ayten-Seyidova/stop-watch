"use strict"

$(() => {
    var start = $("#start");
    var pause = $("#pause");
    var reset = $("#reset");
    var lap = $("#lap");
    var secondText = $("#second");
    var minuteText = $("#minute");
    var hourText = $("#hour");
    var lapText = $("#lapText");
    var a = false;
    var second = 0;
    var minute = 0;
    var hour = 0;
    var count = 0;
    var secondLap = 0;
    var minuteLap = 0;
    var hourLap = 0;
    var myInterval;

    start.on("click", () => {
        if (!a) {
            a = true;
            myInterval = setInterval(() => {
                second / 10 < 1 ? secondText.text("0" + second++) : secondText.text(second++);
                if (second === 60) {
                    minute = minute + 1;
                    secondText.text("00");
                    second = 0;
                    minute / 10 < 1 ? minuteText.text("0" + minute) : minuteText.text(minute);
                    if (minute === 60) {
                        hour = hour + 1;
                        minuteText.text("00");
                        minute = 0;
                        hour / 10 < 1 ? hourText.text("0" + hour) : hourText.text(hour);
                    }
                }
            }, 1000);
        }
    })

    pause.on("click", () => {
        a = false;
        clearInterval(myInterval);
    });

    reset.on("click", function () {
        second = 0;
        minute = 0;
        hour = 0;
        secondText.text("00");
        minuteText.text("00");
        hourText.text("00");
    })

    lap.on("click", function () {
        count++
        var x = $("<p>");
        second / 10 < 1 ? secondLap = "0" + second : secondLap = second;
        minute / 10 < 1 ? minuteLap = "0" + minute : minuteLap = minute;
        hour / 10 < 1 ? hourLap = "0" + hour : hourLap = hour;
        x.text(hourLap + " : " + minuteLap + " : " + secondLap)
        lapText.append(x);
        if (count === 4) {
            lapText.css({ "overflow-y": "scroll", height: "180px" })
        }
    })
})