/* var car =["Honda","Kia","FOrd"];
console.log(car);
car.push("Nissan");
car.pop();
car.pop();
car.push("Hyundai");

for(var i =0;i<car.length;i++){
    console.log(car[i]);
}
 */
/* var fruits = new Array("Apples","Banana","Mango");
for (var i =0;i<fruits.length;i++){
    console.log(fruits[i]);
} 

 */

/* const nodemon = require("nodemon"); */


/* var car_manufacturer = "Audi";
var car_model = "Q7";
var price = 5000;
function allwheeldrive(){
    console.log("THis car comes with quattro all wheel drive");
}

allwheeldrive(); */
/* var car = { 
    
    car_manufacturer : "Audi",
    car_model: "Q7",
    price:50000,
    allwheeldrive:function(){
        console.log("This car comes with quattrro all-wheel");

    }
}

car.car_color = "Black";
console.log(car.car_color);

car.newfunc = function(){
    return("Function successfull added");

}
console.log(car.newfunc());


car.price = 500000;
console.log(car.price); */

/* var str1 = new String();
console.log(typeof(str1));

function cars(car_manufacturer,car_model,price){
    this.car_manufacturer = car_manufacturer;
    this.car_model= car_model;
    this.price = price;
    this.allwheeldrive = function(){
        console.log("THis car comes with four wheel drive ");
    }
}


var c1 = new cars("Audi","Q7",50000);
c1.allwheeldrive();
var c2 = new cars("BMQ","XY",40000); */


/* console.log(Math.E);
var n =49;
var answer = Math.sqrt(49);
console.log(answer);
var x = [3,2,4,5,4];
var x1 = Math.min(x);
console.log(x1);



var rect1 = {
    length:5,
    width:10,
    getarea:function(){
        return this.length*this.width;

    },
    getparameter: function(){
        return 2 *this.length
    }

} */

/* var now = new Date("October 13 2014 11:30:30");

document.write(now); */


//DATE METHODS

/* function clock(){
    var cd = new Date();
    var hours = cd.getHours();
    var minutes =cd.getMinutes() ;
    var seconds= cd.getSeconds();
    document.write(cd,hours,minutes,seconds);
}
setInterval("clock()",1000); */


//Construction function

/* var rect2 = new Object();
rect2.length = 5;
rect2.width = 10;
rect2.getarea = function(){
    return this.length*this.width;

};
rect2.getPerimeter = function(){
    return 2*this.length+2*this.width;
};
document.write(rect2.length);
document.write(rect2.width);
document.write(rect2.getPerimeter());
document.write(rect2.getarea());
 */

/* function rect3(length,width){
    this.length = length;
    this.width = width;
    this.getArea = function(){
        return this.length*this.width;
    },
    this.getPerimeter = function(){
        return 2*this.length+2*this.width;
    }
}
var r1 = new rect3(6,4);
document.write(); */

/* console.log("Welcome to simplicode");
var abc = {
    Name:"Kaushal",
    Subject:"JavaScript",
    Address: "Banglore"

}
console.log(abc); */

/* function xyz(name,subject,Address){
    this.name = name;
    this.Address = Address;
    this.subject = subject;
}
var x1 = new xyz("kausal","Java","Earth");
console.log(x1);

xyz.prototype.getName = function(){
    return this.name;
}

xyz.prototype.getAddress = function(){
    return this.Address;
}
xyz.prototype.grades = "A";


var x1 = new xyz("Krishnam","JavaScript","ANdheri");
console.log(x1.grades);
 */
/* 
const Employee = {
    Post: function () {
        return "A software Developer";

    },
    changeName: function (name) {
        this.name = name;
    }
};
var E1 = Object.create(Employee);
E1.name = "Kausal";
E1.role = "Writer";
E1.changeName("Ram");
console.log(E1);

var E1=Object.create(Employee,{
    name:{value:"apoorva",writable:true},
    role:{value:"Prgrammer"},

})

E1.changeName()
 */

/* function Employee(name, id, salary) {
    this.name = name;
    this.id = id,
        this.salary = salary;
}

Employee.prototype.post = function () {
    return (this.name + " " + "is a content creator");

}

var Krishnam = new Employee("Krishna", 2323, 10000);
console.log(Krishnam);

function Programmer(name, id, salary, language) {
    Employee.call(this, name, id, salary);
    this.language = language;
}
Programmer.prototype = Object.create(Employee.prototype);
var Arun = new Programmer("Arun", 3223, 12000, "JavaScript");
console.log(Arun); */

/* class Student {
    constructor(name,age,roll){
    this.name = name;
    this.age = age;
    this.roll = roll;
    }
    Org(){
        return("I am "+this.name+"From Credence Analytics");

    }
    dob(){
        return("The date of birth of "+this.name+"is"+(2022-this.age));

    }
    static add(a,b){
        return a+b;

    }
    
}
var Krishnam = new Student("Kaushal",21,45);
console.log(Krishnam);
console.log(Student.add(10,45));


class Student1 extends Student{
    constructor(name,age,roll,language,section){
        super(name,age,roll);
        this.language = language;
        this.section =section;

    }

}

var Arun = new Student1("Arun",35,2,"JavaScript","A");

console.log(Arun); */

/* 
console.log("Welcome to SimpliCode");
var a = window;
var x = parseInt(prompt("Enter the valueof x"));
var y = parseInt(prompt("Enter the value of y"));
document.write(x+y);
 */
/* var a = window;
 a= confirm("Are you sure");
 console.log(a);
 */

/* var a = window;

console.log(a); */

/* function button() {
    var c =document.getElementById("h2").innerHTML;
    alert(c); 

} */

function OneS(){
    var x = document.querySelector(".container");
    
    console.log(x.children);
}

setTimeout(()=>{
    document.body.
})























