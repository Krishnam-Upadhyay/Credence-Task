/* //Creation

let now = new Date();
console.log(now);

let jan = new Date(5);
console.log(jan);


let dec2 = new Date(-24*3600*1000);

let date = new Date("2017-01-26");
console.log(date);

console.log( new Date(2010,3,3,3))
 */
//Date Methods

/* let date = new Date();
//the hour in you current time zone
console.log(date.getHours());

console.log(date.getUTCHours) */

//Setting date components

/*
let today = new Date();
today.setHours(0);
console.log(today);
let date = new Date(2016,1,28);
date.setDate(date.getDate()+2); */

/* let date = new Date();
date.setSeconds(date.getSeconds()+70);
console.log(date); */


//DATE TO NUMBER

/* let date = new Date();
console.log(+date);

let start = new Date();
//do the job
for(let i =0;i<100000;i++){
    let doSomething = i*i*i;

}

let end = new Date();

console.log(end); */

//DATE.NOW()

/* let start = Date.now();
//do the job
for(let i =0;i<10000;i++){
    let doSomething = i*i*i;

}
let end = Date.now();
console.log(end-start); */

//DATE.PARSE FROM A STRING

/* let ms = Date.parse("2012-01-26");
console.log(ms);


 */

/* console.log(`Loading started${performance.now()}`); */

//TASK1 CREATE A DATE

/* let d1 = new Date("2012-02-20T03:12");
console.log(d1); */

//TASK2

/* function getWeekDay(date){
    let days = ["Su",'MON','TU','WE','TH','FR','SA'];
    return days[date.getDay()];

}

let date = new Date(2014,0,3);

console.log(getWeekDay(date)); */

//TASK3 Eaureopean weekday

/* function getLocalDay(date){
    let day = date.getDay();
    if(day ==0){
        day = 7;
    }
    return day;
} */

//TASK4 WHICH day of month was many days ago?


/* function getDateAgo(date,days){
    let dateCopy = new Date(date);
    dateCopy.setDate(date.getDate()-days);
    return dateCopy.getDate();

}
let date = new Date(2015,0,2);
console.log(getDateAgo(date,1));
console.log(getDateAgo(date,2)); */


//TASK 5 last day of month
/* function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}
console.log(getLastDayOfMonth(2012,0)); */




