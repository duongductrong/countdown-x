interface CountdownI {
  fromNow(): CountDown;
  countdown(
    eventDate: string | number | Date
  ): {
    seconds: Number | string;
    minutes: Number | string;
    hours: Number | string;
    days: Number;
    months: Number;
    years: Number;
  };

  countdownEvery(
    eventDate: string | number | Date,
    options: { ms: number },
    callback: Function
  ): void;
}

class CountDown implements CountdownI {
  private now: Date | null = null;

  fromNow() {
    this.now = new Date();
    return this;
  }

  countdownEvery(
    eventDate: string | number | Date,
    options: { ms: number },
    callback: Function
  ) {
    if (!Number(options?.ms)) {
      throw new Error(
        "options { ms: Number } is required and must be a number"
      );
    }

    setInterval(() => {
      if (this.now) {
        this.fromNow();
      }
      
      callback.call(this, this.countdown(eventDate));
    }, options.ms ?? 0);
  }

  countdown(
    eventDate: string | number | Date
  ): {
    seconds: Number | string;
    minutes: Number | string;
    hours: Number | string;
    days: Number;
    months: Number;
    years: Number;
  } {
    if (!this.now)
      throw new Error("There is no definite date for the countdown.");
    if (!eventDate)
      throw new Error("Do not enter the date you want to count down.");

    let eventD = new Date(eventDate).getTime() - this.now.getTime();

    if (eventD < 0)
      throw new Error("The countdown date must be less than the current date");

    let s, m, h, day, month, year;

    s = Math.floor(eventD / 1000);
    m = Math.floor(s / 60);
    h = Math.floor(m / 60);
    day = Math.floor(h / 24);
    month = Math.floor(day / 30);
    year = Math.floor(month / 12);

    s %= 60;
    m %= 60;
    h %= 24;
    day %= 30;
    month %= 12;
    year %= 100;

    return {
      seconds: s < 10 ? `0${s}` : s,
      minutes: m < 10 ? `0${m}` : m,
      hours: h < 10 ? `0${h}` : h,
      days: day,
      months: month,
      years: year,
    };
  }
}

export = new CountDown();
