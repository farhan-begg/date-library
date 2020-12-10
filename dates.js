const fullMon = [
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
        M: fullMon[this.month],
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
        return `${this.year} ${fullMon[this.month]} ${this.day}`;
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
    const curr = new Date()
    let diff = curr.getTime() - this.date.getTime()
    //check if there is no difference
    if (diff == 0) {
      return 'now'
    }
    //check if there is a seconds difference
    //calculate seconds
    diff /= 1000
    if (Math.abs(diff) <= 44) {
      return `a few seconds ` +  (diff < 0 ? `from now`: `ago`)
    }

    if (Math.abs(diff) == 44) {
      return `${Math.abs(diff).toFixed(0)} seconds ` + (diff < 0 ? `from now`: `ago`)
    }

    if (Math.abs(diff) >= 44 && Math.abs(diff) <= 89) {
      return `a minute ` + (diff < 0 ? `from now`: `ago`)
    }

    // calculate minute
    diff /= 60
    if (Math.abs(diff) >= 1.5 && Math.abs(diff) <= 44) {
      return `${Math.abs(diff).toFixed(0)} minutes ` + (diff < 0 ? `from now`: `ago`)
    }

    //an hour
    if (Math.abs(diff) > 44 && Math.abs(diff) <= 89) {
      return `an hour ` + (diff < 0 ? `from now`: `ago`)
    }

    //calculate hour
    diff /= 60
    if (Math.abs(diff) > 1.5 && Math.abs(diff) <= 21) {
      return `${Math.abs(diff).toFixed(0)} hours ` + (diff < 0 ? `from now`: `ago`)
    }

    // a day
    if (Math.abs(diff) > 21 && Math.abs(diff) <= 35) {
      return `a day ` + (diff < 0 ? `from now`: `ago`)
    }

    //calculate days
    diff /= 24
    if (Math.abs(diff) > 1.6 && Math.abs(diff) <= 25) {
      return `${Math.abs(diff).toFixed(0)} days ` + (diff < 0 ? `from now`: `ago`)
    }

    // a month
    if (Math.abs(diff) > 25 && Math.abs(diff) < 45) {
      return `a month ` + (diff < 0 ? `from now`: `ago`)
    }

    //calculate months
    diff /= 30
    if (Math.abs(diff) >= 1.4 && Math.abs(diff) <= 10.5) {
      return `${Math.abs(diff).toFixed(0)} months ` + (diff < 0 ? `from now`: `ago`)
    }

    // year
    diff /= 12
    return `${Math.abs(diff).toFixed(0)} year` + (Math.abs(diff) < 1.5 ? ' ': 's ') + (diff < 0 ? `from now`: `ago`)
  }
  }
  
  module.exports.D = D;