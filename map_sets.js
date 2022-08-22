/* let map = new Map();
map.set('1','str1');
map.set(1,'num1');
map.set(true,'bool1');
console.log(map.get("1"));
console.log(map.get(1));
console.log(map.size);

 */

//Map can also use objects as keys
let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50]
]);

//iterate over keys (vegetables)
/* 
for(let vegetable of recipeMap.keys()){
    console.log(vegetable);
    
}

for(let amount of recipeMap.values()){
    console.log(amount);
}

for (let entry of recipeMap){
    console.log(entry);
}

//runs the function for each(key,value) pair

recipeMap.forEach((value,key,map)=>{
    console.log(key,value,map);
    
})


 */

/* let map = new Map();
map.set('banana',1);
map.set('orange',2);
map.set('orange',4);
let obj = Object.fromEntries(map.entries());
console.log(obj);


 */


/* //SETS

let set = new Set();
let john ={name:"John"};
let pete = {name:"Pete"};
let mary = {name:"Mary"};

//Visits, some users come multiple times

set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

//set keeps only unique values
console.log(set.size);

for(let user of set){
    console.log( user.name);
}

 */


//Iteration over Set

let set = new Set(["Oranges", "apples", "bananas"]);

for (let value of set) console.log(value);


//the same with forEach:
set.forEach((value, valueAgain, set) => {
    console.log(value);
})

//TASK3
let map = new Map();
map.set("name", "john");
let keys = Array.from(map.keys());
keys.push("more");
console.log(keys);


