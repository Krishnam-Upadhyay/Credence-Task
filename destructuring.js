//let arr = ["John","Smith"]
/*  let arr = ["John","Smith"]


let [firstName,surname] = arr;
console.log(firstName);
console.log(surname);
 */
/* 
let [firstName,surname] = "John Smith".split(" ");

console.log(firstName);
console.log(surname);

 */
//.et [firstName,surname]=arr;
/* let firstName = arr[0];
let surname  = arr[1]; */

/* let[firstName,,title] = ["Julius","Caesar","Consul","of the rome republic"];
console.log(title);
 */

//works with any iterableon teh right-side
/* let [a,b,c]='abc';
let[one,two,three] = new Set([1,2,3]);

for x of a */

//Assign to anything at the left-side

/* let user ={};
[user.name,user.surname] = "John Smith".split(" ");

console.log(user.name);
console.log(user.surname); */


/* let user = {
    name:"John",
    age:30
};

//loop over keys-and-values
for (let [key,value] of Object.entries(user)){
    console.log(`${key}:${value}`);

}
 */


/* let user = new Map();
user.set("name","John");
user.set("age","30");

//Map iterates as [key,value] 

for(let[key,value] of user){
    console.log(`${key}: ${value}`);
}


 */

//SWAP VARIABLE TRICK

/* let guest = "Jane";
let admin = "Pete";

//Let's swap the values: make guest = Pete,admin = jane
[guest,admin]=[admin,guest];
console.log(`${guest}: ${admin}`);

 */

//THE REST "..."


/* let [name1,name2,...rest]=["Julius","Caesar","COnsule","of the Roman republic"];


console.log(rest[0]);
console.log(rest[1]); */
/* 
let [name1,name2,...titles] =["Julius","Caesar","Consul","of the Roman Republic "];


//DEFAUL VALUES

let[firstName,surName] = [];
console.log(firstName);
console.log(surName);

let[Name = 'Guest',surname = "Anonymous"] = ["Julius"];

console.log(Name);
console.log(surname);
 */
//runs onnly prompt for surname"

//OBJECT DESTRUCTURING

/* let options = {
    title:"Menu",
    width : 100,
    height:200
};

let{title,width,height}=options;
console.log(title,width,height); */

//Nested destructuring

/* let options = {
    size:{
        width:100,
        heigth:200
    },
    items:["Cake","Donut"],
    extra:true
};
 */
//destructing assignment split in multiple linea for clarity


//smart function paramenters
/* 
let options = {
    title:"My menu",
    items:["Item1","Item2"]
};

showMenu({
    title = "Untitiled",
    width:w
}) */


//TASK1
let user = {
    name: "John",
    years: 30
};

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
}

function topSalary(salaries) {
    let maxSalary = 0;
    let maxName = null;

    for (const [name, salary] of Object.entries(salaries)) {
        if (maxSalary < salary) {
            maxSalary = salary;
            maxName = name;
        }
    }
    return maxName;
}









