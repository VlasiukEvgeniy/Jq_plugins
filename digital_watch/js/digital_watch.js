function Clock(sSelector) {
    var c = this;

    c.clock = $(sSelector);

    c.getTimeData = function (sTimeSelector, sMethodType) {
        /*timeSelector (.hours, .min, .sec)
         methodType (“getHours”, “getMinutes”, “getSeconds”)*/
        var timePlace = c.clock.find("." + sTimeSelector),
            today = new Date(),
            time = today[sMethodType]();

        timePlace.text(time < 10 ? "0" + time : time);
    };
    
    c.load = function () {
        setInterval(function () {
            c.getTimeData("hours", "getHours");
            c.getTimeData("min", "getMinutes");
            c.getTimeData("sec", "getSeconds");
        }, 1000);
    };

    c.load();
}