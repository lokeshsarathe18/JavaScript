let myTodos = {
    day: 'Monday',
    meetings: 0,
    meetDone: 0,

    addMeeting: function (meet = 0) {
        this.meetings = this.meetings + meet
    },

    meetingDone: function (meet = 0) {
        this.meetDone = this.meetDone + meet
    },

    getDaySummary: function () {
        let meetLeft = this.meetings - this.meetDone
        return `You are left with ${meetLeft} meetings for today.`
    },

    resetDay: function () {
        this.meetings = 0
        this.meetDone = 0
    }
}

myTodos.addMeeting(4)
myTodos.addMeeting(2)
myTodos.meetingDone(5)
console.log(myTodos.getDaySummary())
myTodos.resetDay()
console.log(myTodos.getDaySummary())