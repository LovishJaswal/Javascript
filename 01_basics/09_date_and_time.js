//1. What is Date in JavaScript?

//JavaScript has a built-in Date object for working with dates & times.
//It stores timestamps internally (milliseconds since Jan 1, 1970, UTC).
//It can create, read, format, and modify dates.
//Even though considered legacy, learning this is important.


//2. Creating a Date
// Current date & time (NOW)
let now = new Date();
console.log(now);


//3. Create Date from values
let d1 = new Date("2025-10-27"); // YYYY-MM-DD
let d2 = new Date(2025, 9, 27);  // months start at 0 (0=Jan)


//Note: month is 0-based:
//0 → January
//9 → October


//4. Create Date from timestamp
let d3 = new Date(0); // Jan 1, 1970


//5. Get parts of a date
let date1 = new Date();

console.log(date1.getFullYear());    // 2025
console.log(date1.getMonth());       // 0 to 11
console.log(date1.getDate());        // 1 to 31
console.log(date1.getDay());         // 0 (Sun) to 6 (Sat)
console.log(date1.getHours());       // 0 to 23
console.log(date1.getMinutes());     // 0 to 59
console.log(date1.getSeconds());     // 0 to 59
console.log(date1.getMilliseconds()); // 0 to 999
console.log(date1.getTime());         // timestamp in ms


//6. Set parts of a date
let date2 = new Date();
date2.setFullYear(2030);
date2.setMonth(5);  // June
date2.setDate(15);
console.log(date2);


//7. UTC versions (for servers / backend)
let date3 = new Date();

console.log(date3.getUTCFullYear());
console.log(date3.getUTCMonth());
console.log(date3.getUTCDate());


//8. Formatting dates
let date4 = new Date();

console.log(date4.toDateString());        // "Mon Oct 27 2025"
console.log(date4.toISOString());         // "2025-10-27T08:23:45.123Z"
console.log(date4.toLocaleDateString());  // Regional formatting
console.log(date4.toLocaleTimeString());


//9. Compare dates
let compareA = new Date('2025-01-01');
let compareB = new Date('2026-01-01');

console.log(compareA < compareB); // true

//Dates can be compared like numbers because timestamps are numbers.


//10. Time math (Add days / hours)
let date5 = new Date();
date5.setDate(date5.getDate() + 7); // +7 days
console.log(date5);


//11. Convert to timestamp
let date6 = new Date();
console.log(date6.getTime());
console.log(Date.now()); // current timestamp


//12. Convert timestamp → date
let ms = Date.now();
let date7 = new Date(ms);
console.log(date7);


//Common pitfalls with Date
//Months are 0-indexed (weird)
//Parsing date strings differs across browsers
//Time zones cause unexpected bugs



//Modern Alternative (Future Standard): Temporal API

//This is the next-gen date/time API in JS.
//It fixes:
//Time zones
//Offsets
//Durations
//Math
//Parsing

//Example usage:

//NOTE: REMOVE COMMENTS ONLY IF SUPPORTED!

// import { Temporal } from '@js-temporal/polyfill';

// const today = Temporal.Now.plainDateISO();
// console.log(today);

// const tz = Temporal.Now.zonedDateTimeISO();
// console.log(tz);

// let date8 = Temporal.PlainDate.from("2025-10-27");
// console.log(date8.add({ days: 5 })); // 2025-11-01



//Libraries you may see today
//Because Date is weird:

//Moment.js (legacy)
//Day.js (recommended lightweight)
//Luxon (Temporal-like)


//Big Picture
//Feature   Date (Legacy)   Temporal (Modern)
//Time zones     hard      built-in
//Duration math painful   easy
//Formatting    average      rich & clean
//Safety        mutable      immutable

//Temporal → future of date handling.


//Final Advice (as a learner)
//Learn Date basics properly (still widely used)
//Be aware of limitations
//Know that Temporal will become mainstream
//Don't memorize broken hacks
//Learn formatting/output methods


//Quick Cheatsheet
let dateCS = new Date();

dateCS.getFullYear();
dateCS.getMonth();
dateCS.getDate();
dateCS.getDay();

dateCS.getHours();
dateCS.getMinutes();
dateCS.getSeconds();

Date.now();
dateCS.getTime();
dateCS.toISOString();
dateCS.toLocaleDateString();
dateCS.toLocaleTimeString();

dateCS.setFullYear(2028);
dateCS.setMonth(3);
