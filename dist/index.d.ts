interface CountdownI {
    fromNow(): CountDown;
    countdown(eventDate: string | number | Date): {
        seconds: Number | string;
        minutes: Number | string;
        hours: Number | string;
        days: Number;
        months: Number;
        years: Number;
    };
}
declare class CountDown implements CountdownI {
    private now;
    fromNow(): this;
    countdown(eventDate: string | number | Date): {
        seconds: Number | string;
        minutes: Number | string;
        hours: Number | string;
        days: Number;
        months: Number;
        years: Number;
    };
}
declare const _default: CountDown;
export = _default;
