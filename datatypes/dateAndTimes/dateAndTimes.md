
# JavaScript Date and Time

JavaScript provides the built-in `Date` object for creating, reading, modifying, formatting, and comparing dates and times.

## 1. Creating Date Objects

```js
const now = new Date(); // Current date and time

const date1 = new Date("2026-10-31"); // Date string
const date2 = new Date(2026, 9, 31); // Year, month (0-based), day
const date3 = new Date(2026, 9, 31, 14, 30); // Year, month, day, hour, minute
```

### Important

In the numeric `Date` constructor, the month is zero-based:

| Month | Value |
|---|---:|
| January | 0 |
| February | 1 |
| ... | ... |
| October | 9 |
| December | 11 |

```js
const date = new Date(2026, 0, 15);
console.log(date); // January 15, 2026
```

## 2. Getting Date and Time Values

Use getter methods to read parts of a date.

```js
const date = new Date();

date.getFullYear(); // Year, e.g. 2026
date.getMonth(); // Month: 0–11
date.getDate(); // Day of month: 1–31
date.getDay(); // Day of week: 0 (Sunday)–6 (Saturday)

date.getHours(); // Hour: 0–23
date.getMinutes(); // Minute: 0–59
date.getSeconds(); // Second: 0–59
date.getMilliseconds(); // Milliseconds: 0–999
```

**Remember:**

- `getDate()` returns the day of the month.
- `getDay()` returns the day of the week.
- `getMonth()` returns a zero-based month.

## 3. Setting Date and Time Values

Setter methods modify an existing `Date` object.

```js
const date = new Date();

date.setFullYear(2027);
date.setMonth(0); // January
date.setDate(15);

date.setHours(10);
date.setMinutes(30);
date.setSeconds(0);
```

Common setter methods include:

```js
setFullYear()
setMonth()
setDate()
setHours()
setMinutes()
setSeconds()
setMilliseconds()
```

## 4. Formatting Dates

```js
const date = new Date();

date.toString(); // Local date and time
date.toDateString(); // Readable date only
date.toTimeString(); // Readable time only
date.toISOString(); // ISO date-time string in UTC
date.toLocaleDateString(); // Date formatted for the locale
date.toLocaleTimeString(); // Time formatted for the locale
date.toLocaleString(); // Date and time formatted for the locale
```

### Formatting with options

```js
const date = new Date();

const formatted = date.toLocaleString("en-IN", {
  day: "2-digit",
  month: "short",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit"
});

console.log(formatted);
```

The exact output depends on the locale and options.

## 5. Timestamps

A timestamp is the number of milliseconds since **January 1, 1970, 00:00:00 UTC**.

```js
const date = new Date();

date.getTime(); // Timestamp for this date
Date.now(); // Current timestamp
```

Create a date from a timestamp:

```js
const timestamp = Date.now();
const date = new Date(timestamp);
```

## 6. Comparing Dates

Dates can be compared using comparison operators.

```js
const date1 = new Date("2026-10-31");
const date2 = new Date("2026-11-01");

console.log(date1 < date2); // true
console.log(date1 > date2); // false
console.log(date1.getTime() === date2.getTime()); // false
```

Using timestamps is also useful for explicit comparisons:

```js
if (date1.getTime() < date2.getTime()) {
  console.log("date1 is earlier");
}
```

## 7. Finding the Difference Between Dates

Subtracting two `Date` objects returns the difference in milliseconds.

```js
const start = new Date("2026-10-01");
const end = new Date("2026-10-10");

const differenceMs = end - start;
const differenceDays = differenceMs / (1000 * 60 * 60 * 24);

console.log(differenceDays); // 9
```

Convert milliseconds to other units:

```js
const seconds = differenceMs / 1000;
const minutes = differenceMs / (1000 * 60);
const hours = differenceMs / (1000 * 60 * 60);
const days = differenceMs / (1000 * 60 * 60 * 24);
```

This calculates elapsed time in 24-hour periods. Calendar-day calculations can differ around daylight-saving time changes.

## 8. Local Time and UTC

- **Local time:** Uses the system's configured time zone.
- **UTC:** A standard time reference.

```js
const date = new Date();

date.getHours(); // Local hour
date.getUTCHours(); // UTC hour

date.getDate(); // Local day of month
date.getUTCDate(); // UTC day of month

date.toISOString(); // UTC ISO string
```

Use UTC methods when you need to read date and time components in UTC.

## 9. Parsing Date Strings

```js
const date1 = new Date("2026-10-31");
const date2 = new Date("2026-10-31T10:30:00");
const date3 = new Date("2026-10-31T10:30:00Z");
const date4 = new Date("2026-10-31T10:30:00+05:30");
```

- `"2026-10-31"` is a date-only ISO string and is parsed as UTC.
- `"2026-10-31T10:30:00"` has no offset and is interpreted as local time.
- `"Z"` indicates UTC.
- `"+05:30"` specifies a time-zone offset.

For reliable parsing, prefer ISO-formatted strings and include an offset when the time zone matters.

## 10. Common Mistakes

```js
const date = new Date();

date.getMonth(); // 0-based month, not 1-based
date.getDate(); // Day of month
date.getDay(); // Day of week
```

- Do not forget that months are zero-based in the numeric constructor and `getMonth()`.
- `Date` objects are mutable; setter methods modify the object.
- Avoid assuming every month has 30 days.
- Avoid assuming every local day is exactly 24 hours when daylight-saving time may apply.
- Use explicit time-zone information when working with dates from APIs or across time zones.

## Quick Revision

| Method | Purpose |
|---|---|
| `new Date()` | Create the current date and time |
| `Date.now()` | Get the current timestamp |
| `getFullYear()` | Get the year |
| `getMonth()` | Get the month, from 0 to 11 |
| `getDate()` | Get the day of the month |
| `getDay()` | Get the day of the week |
| `getHours()` | Get the local hour |
| `getUTCHours()` | Get the UTC hour |
| `getTime()` | Get the timestamp of a date |
| `toISOString()` | Format as a UTC ISO string |
| `toLocaleString()` | Format using locale options |