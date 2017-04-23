function Timer(sSelector) {
    var t = this;

    t.timer = $(sSelector);

    t.days = t.timer.find('.days');
    t.hours = t.timer.find('.hours');
    t.minutes = t.timer.find('.min');
    t.seconds = t.timer.find('.sec');

    t.cur_day = 0;
    t.cur_hour = 0;
    t.cur_min = 0;
    t.cur_sec = 0;

    t.countInterval = function (interval) {
        t.cur_day = Math.floor(interval / (1000 * 60 * 60 * 24));
        t.cur_hour = Math.floor((interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        t.cur_min = Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60));
        t.cur_sec = Math.floor((interval % (1000 * 60)) / 1000);
    };

    t.showTime = function () {
        t.days.text(t.cur_day);
        t.hours.text(t.cur_hour < 10 ? '0' + t.cur_hour : t.cur_hour);
        t.minutes.text(t.cur_min < 10 ? '0' + t.cur_min : t.cur_min);
        t.seconds.text(t.cur_sec < 10 ? '0' + t.cur_sec : t.cur_sec);
    };

    t.load = function () {
        var timeInt = setInterval(function () {
            var countDownDate = new Date('April 11, 2017 19:00:00').getTime(); // CHANGE DATE
            var today = new Date().getTime();
            var interval = countDownDate - today;

            if (interval < 0) {
                clearInterval(timeInt);
            }
            t.countInterval(interval);
            t.showTime();
        }, 1000);
    };

    t.load();
}
