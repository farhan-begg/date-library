class D {
    constructor(...args) {
        this.date = new Date(...args)
    }
    Year() {
        // return full year
        return this.date.getFullYear()
    }
    year() {// return the last 2 digits of the year
        const d = this.date
        return d.getFullYear().toString().substr(-2)
    }
    month() {// return month abbrev
        const months = ["Jan", "Feb", "Mar", "Apr", "May",
            "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
        ]

        return months[this.date.getMonth()]
    }
    day() {// return days of the week abbrev
        const days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"]

        return days[this.date.getDay()]
    }
    hours() {
        return this.date.getHours()
    }
    mins() {
        return this.date.getMinutes()
    }
    secs() {
        return this.date.getSeconds()
    }
}


const d = new D(2020, 0, 1)

console.log(d.Year())
console.log(d.year())
console.log(d.month())
console.log(d.day())
console.log(d.hours())
console.log(d.mins())
console.log(d.secs())



module.exports.D = D















