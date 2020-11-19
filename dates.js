

const months_full = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December']

const months_abrv = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug',
    'Sep', 'Oct', 'Nov', 'Dec']

class D {
    constructor(...args) {
        this.date = new Date(...args)
        this.chars = {
            'Y': this.year,
            'y': this.year % 100,
            'M': months_full[this.month],
            'm': months_abrv[this.month],
            'D': pad(this.day),
            'd': this.day,
            'H': pad(this.hour),
            'h': this.hour,
            'I': pad(this.min),
            'i': this.min,
            'S': pad(this.secs),
            's': this.secs
        }
    }

    /**
     * Returns the year of the date instance.
     * @returns Number
     */

    get year() {
        return this.date.getFullYear()
    }

    /** 
     * Returns the month index of the date instance.
     * @returns Number
     */

    get month() {


        return months[this.date.getMonth()]
    }

    /** 
     * Returns the date of the date instance.
     * @returns Number
     */

    get day() {
        return this.date.getDate()
    }

    /** 
     * returns the hour of the date instance.
     * @returns Number
     */

    get hour() {
        return this.date.getHours()
    }


    /** 
     * returns the hour of the minute instance.
     * @returns Number
     */

    get min() {
        return this.date.getMinutes()
    }

    /** 
   * returns the hour of the second instance.
   * @returns Number
   */

    get secs() {
        return this.date.getSeconds()
    }

    /** 
   * returns a formatted string representation of date instance.
   * @param String f
   * @returns String
   */


    format(f = false) {
        if (f === false) {
            return `${this.year} ${months_full[this.month]} ${this.day}`
        }
        else {
            let time = ""
            for (let i = 0; i < f.length; i += 1) {
                if (f[i] in this.chars) {
                    time += this.chars[f[i]]
                }
                else {
                    time += f[i]
                }
            }
            return time
        }
    }

    /** 
     * returns a string denoting time difference between now and time from 
     * the date insance.
     * @returns String
     */
    when() {
        const curr = new Date()
        let diff = curr.getTime() - this.date.getTime()
        //check if there is no difference
        if (diff == 0) {
            return 'now'
        }
        //calculate seconds
        diff /= 1000
        if (Math.abs(diff) <= 44) {
            return `a few seconds ` + (diff < 0 ? `from now` : `ago`)
        }

        if (Math.abs(diff) == 44) {
            return `${Math.abs(diff).toFixed(0)} seconds ` + (diff < 0 ? `from now` : `ago`)
        }

        if (Math.abs(diff) >= 44 && Math.abs(diff) <= 89) {
            return `a minute ` + (diff < 0 ? `from now` : `ago`)
        }

        // calculate minute
        diff /= 60
        if (Math.abs(diff) >= 1.5 && Math.abs(diff) <= 44) {
            return `${Math.abs(diff).toFixed(0)} minutes ` + (diff < 0 ? `from now` : `ago`)
        }

        //an hour
        if (Math.abs(diff) > 44 && Math.abs(diff) <= 89) {
            return `an hour ` + (diff < 0 ? `from now` : `ago`)
        }

        //calculate hour
        diff /= 60
        if (Math.abs(diff) > 1.5 && Math.abs(diff) <= 21) {
            return `${Math.abs(diff).toFixed(0)} hours ` + (diff < 0 ? `from now` : `ago`)
        }

        // a day
        if (Math.abs(diff) > 21 && Math.abs(diff) <= 35) {
            return `a day ` + (diff < 0 ? `from now` : `ago`)
        }

        //calculate days
        diff /= 24
        if (Math.abs(diff) > 1.6 && Math.abs(diff) <= 25) {
            return `${Math.abs(diff).toFixed(0)} days ` + (diff < 0 ? `from now` : `ago`)
        }

        // a month
        if (Math.abs(diff) > 25 && Math.abs(diff) < 45) {
            return `a month ` + (diff < 0 ? `from now` : `ago`)
        }

        //calculate months
        diff /= 30
        if (Math.abs(diff) >= 1.4 && Math.abs(diff) <= 10.5) {
            return `${Math.abs(diff).toFixed(0)} months ` + (diff < 0 ? `from now` : `ago`)
        }

        // year
        diff /= 12
        return `${Math.abs(diff).toFixed(0)} year` + (Math.abs(diff) < 1.5 ? ' ' : 's ') + (diff < 0 ? `from now` : `ago`)
    }
}


/** 
 * pads a single digit number with 0 and returns it as string.
 * @param Number num
 * @returns String
 */

function pad(num) {
    if (num < 10) {
        return `0${num}`
    }
    return `${num}`
}
