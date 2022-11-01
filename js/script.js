window.addEventListener("DOMContentLoaded", () => {
    function getTime() {
        let days, hours, minutes, seconds;
        const total = Date.parse('2023-10-30T12:00:00.000Z') - Date.parse(new Date());

        if (total <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else {
            days = Math.floor(total / (24 * 60 * 60 * 1000));
            hours = Math.floor(total / (60 * 60 * 1000) % 24);
            minutes = Math.floor(total / (60 * 1000) % 60);
            seconds = Math.floor((total / 1000) % 60);
        }

        return {
            'total': total,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
        };
    }

    function correctNum(num) {
        if (num >= 0 && num <= 9) {
            return 0 + num
        } else return num
    }

    function setTimer() {
        const days = document.querySelector('.days'),
            hours = document.querySelector('.hours'),
            minutes = document.querySelector('.minutes'),
            seconds = document.querySelector('.seconds'),
            timeInterval = setInterval(updateTime, 1000);

        updateTime();

        function updateTime() {
            days.innerHTML = correctNum(`${getTime().days}`);
            hours.innerHTML = correctNum(`${getTime().hours}`);
            minutes.innerHTML = correctNum(`${getTime().minutes}`);
            seconds.innerHTML = correctNum(`${getTime().seconds}`);

            if (getTime().total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setTimer();

});
