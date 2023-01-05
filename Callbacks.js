class Clock {
    constructor() {
        // 1. Create a Date object.
        this.date = new Date();
        
        // 2. Store the hours, minutes, and seconds.
        this.hours = this.date.getHours();
        this.minutes = this.date.getMinutes();
        this.seconds = this.date.getSeconds();

        // 3. Call printTime.
        this.printTime();

        // 4. Schedule the tick at 1 second intervals.

        this.clockTicks();

    }

    clockTicks() {
        setTimeout(() => {
            this._tick();
            this.clockTicks();
        }, 1000);
    }

    printTime() {
        // Format the time in HH:MM:SS
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
        // Use console.log to print it.
    }

    _tick() {
        // 1. Increment the time by one second.
        this.seconds += 1;
        
        if (this.seconds > 59) {
            this.minutes += 1;
            this.seconds = 0;
        }

        if (this.minutes > 59) {
            this.hours += 1;
            this.minutes = 0;
        }

        if (this.hours > 23) {
            this.hours = 0;
        }
        
        // 2. Call printTime.
        this.printTime();

    }
}

const clock = new Clock();