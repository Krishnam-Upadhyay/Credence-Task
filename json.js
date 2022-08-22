/* let user = {
    name:"John",
    age:30,
    toString(){
        return `{name:${this.name},age:${this.age}}`;
    }
}
 */

const { json } = require("express");

//JSON.stringify

/* let student = {
    name:"John",
    age:30,
    isAdmin:false,
    courses:['html','css','js'],
    spouse:null
};

let json =  JSON.stringify(student);
console.log(typeof(json));
 */
/* console.log(JSON.stringify(1));
console.log(JSON.stringify("test"));
console.log(JSON.stringify(true)) */

/* let meetup ={
    title:"Conference",
    romm:{
        number:23,
        participants:["john","ann"]
    }
};
console.log(JSON.stringify(meetup));

 */

//EXCLUDING AND TRANSFORMING : REPLACER
/* let room = {
    number:23
};

let meetup = {
    title:"Conference",
    participants:[{name:"John"},{name:"Alice"}],
    place:room//meetup references room
};
room.occupiedBy = meetup;

console.log(JSON.stringify(meetup,['title','participants','plcae','name']));
 */

/* let room = {
    number:23
};

let meetup = {
    title:"Conference",
    participants:[{name:"John"},{name:"Alice"}],
    place: room
}
room.occupiedBy = meetup;
console.log(JSON.stringify(meetup,function replacer(key,value){
    console.log(`${key}:${value}`);
    retrn (key ==='occupiedBy')? undefined:value;
})) */

/*
let user = {
    name:"John",
    age:25,
    roles:{
        isAdmin:false,
        isEditor: true
    }
};

console.log(JSON.stringify(user,null,4));


 */

//CUSTON "TOJSON"
/*
let room= {
    number:23,
    toJSON(){
        return this.number;
    }
};
let meetup ={
    title:"Conference",
    date:new Date(Date.UTC(2017,0,1)),
    room
};
console.log(JSON.stringify(meetup));
console.log(JSON.stringify(room)); */

//JSON.parse
/*
let numbers = "[0,1,2,3]";
number = JSON.parse(numbers);
console.log(numbers[1]);


let userData = {"name":"John","age":35,"isAdmin":false,"friends":[0,1,2,3]}

let user = JSON.parse(userData);
console.log(user.friends[1]);

 */

/* let str ='{"title":"Confernce","date":"2017-11-30"}';
let meetup = JSON.parse(str);
console.log(meetup.date.getDate()); */

//TASK1  turn the object into json and back

/* let user = {
    name: "John Smith",
    age: 35
};

let user2 = JSON.parse(JSON.stringify(user));
 */




