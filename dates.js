const fullMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

function format_num(num) {
    return (number = num < 10 ? `0${num}` : `${num}`);
}

class D {
    constructor(...args) {
        this.date = new Date(...args);
        this.chars = {
            Y: this.year,
            y: this.year % 100,
            M: fullMonths[this.month],
            m: months[this.month],
            D: this.day,
            d: this.day,
            H: format_num(this.hour),
            h: this.hour,
            I: format_num(this.min),
            i: this.min,
            S: format_num(this.secs),
            s: this.secs,
        };
    }

    /**
     * takes date object and returns the full year
     * @returns number
     * **/

    get year() {
        return this.date.getFullYear();
    }

    /**
     * takes date object and returns month index (i.e. January == 0)
     * @return number
     */

    get month() {
        return this.date.getMonth();
    }

    /**
     * takes date object and returns day index
     * @return number
     */

    get day() {
        return this.date.getDate();
    }

    /**
     * takes date object and returns hour index
     * @return number
     */
    get hour() {
        return this.date.getHours();
    }

    /**
     * takes date object and returns exact minute
     * @return number
     */

    get min() {
        return this.date.getMinutes();
    }

    /**
     * takes date object and returns exact seconds
     * @return number
     */

    get secs() {
        return this.date.getSeconds();
    }

    /**
     * Takes in date object and returns a string
     * @params string
     * @return formatted String
     */

    format(f = false) {
        if (f === false) {
            return `${this.year} ${fullMonths[this.month]} ${this.day}`;
        } else {
            let time = "";
            for (let i = 0; i < f.length; i += 1) {
                if (f[i] in this.chars) {
                    time += this.chars[f[i]];
                } else {
                    time += f[i];
                }
            }
            return time;
        }
    }

    /**
     * Compares current date with date parameter
     * @return string
     */

    when() {
        const todaysDate = new Date();
        let diff = todaysDate.getTime() - this.date.getTime();
        if (diff === 0) {
            return "today";
        }
        diff /= 1000;
        if (Math.abs(diff) < 60) {
            return (
                `${diff.toFixed(0)} second${diff.toFixed(0) > 1 ? "s" : ""}` +
                (diff < 0 ? ` from now` : ` ago`)
            );
        }
        diff /= 60;
        if (Math.abs(diff) < 60) {
            return (
                `${diff.toFixed(0)} minute${diff.toFixed(0) > 1 ? "s" : ""}` +
                (diff < 0 ? ` from now` : ` ago`)
            );
        }
        diff /= 60;
        if (Math.abs(diff) < 24) {
            return (
                `${diff.toFixed(0)} hour${diff.toFixed(0) > 1 ? "s" : ""}` +
                (diff < 0 ? ` from now` : ` ago`)
            );
        }
        diff /= 24;
        if (Math.abs(diff) < 30) {
            return (
                `${diff.toFixed(0)} day${diff.toFixed(0) > 1 ? "s" : ""}` +
                (diff < 0 ? ` from now` : ` ago`)
            );
        }
        diff /= 30;
        diff -= 1;
        if (Math.abs(diff) < 12) {
            return (
                `${diff.toFixed(0)} month${diff.toFixed(0) > 1 ? "s" : ""}` +
                (diff < 0 ? ` from now` : ` ago`)
            );
        }
        diff /= 12;
        diff -= 1;
        return (
            `${diff.toFixed(0)} year${diff.toFixed(0) > 1 ? "s" : ""}` +
            (diff < 0 ? ` from now` : ` ago`)
        );
    }
}

module.exports.D = D;