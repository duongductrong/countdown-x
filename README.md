# How to install

You can using a in 2 way

```js
    npm install countdown-x
```

```js
    npm i countdown-x
```

# How to use

See the example below to use it

```js
    var countdownX = require("countdown-x");

    // example using countdown-x
    setInterval(() => {
        console.log(countdownX.fromNow().countdown("2033/12/10 16:23:00")) // {days: 8, hours: "00", minutes: "05", months: 2, seconds: 44, years: 13}
    }, 1000)

```

# Versions history


| The version | Description | Issues  |
| ----------- |:------------:| ------:|
| v1.0.0      | Project initialization | No issue |
| v1.0.1      | Clean code | No issue |
| v1.0.2      | Clean code | No issue |
| v1.0.3      | Clean code | No issue |
| v1.0.4      | Fix | The countdown time is wrong |
| v1.0.4-1      | Refactoring the source code | Structure |
| v1.0.4-2      | Change example code | No issue |
| v1.0.5     | Add type and supported suggest code | No issue |
