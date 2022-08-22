/* //SLice MEthod

let arr = ["t","e","s","t"];
console.log(arr.slice(1,3));
console.log(arr.slice(-2));

console.log(arr.slice());


let arr1 = [1,2];
//create an array from: arr and [3,4]



let arrayLike = {
    0 : "Something",
    1:"else",
    [Symbol.isConcatSpreadable]:true,
    length:2

}
console.log(arr1.concat(arrayLike));
//Iterate: forEach

arr1.forEach(function(item,index,array){
    console.log(item,index,array);
})







 */

/* let arr = [1,0,false];
console.log(arr.indexOf(0));
console.log(arr.indexOf(false));
console.log(arr.indexOf(null));
console.log(arr.includes(3));
console.log(); */

/* const arr = [NaN];
console.log(arr.indexOf(NaN));
console.log(arr.includes(NaN));
let result = arr.find(function(item,index,array)) */


/* let users = [
    {id:1,name:"John"},
    {id:2,name:"Pete"},
    {id:3,name:"Marry"}

];

let user = users.find(item=>item.id===1);
console.log(user.name); */


//FILTER
/* let users = [
    {id:1,name:"JOhn"},
    {id:2,name:"Pete"},
    {id:3,name:"Mary"}
]; */

//returns array of the first two users
/* let someUsers = users.filter(item=>item.id<3);
console.log(someUsers); */


//TRNASFORM AN ARRAY

//MAP
/* let lengths = ["Bilbo","Gandalf","Nazgul"].map(item=>item.length);
console.log(lengths); */


//SORT(FN)
/* let arr = [1,2,3,15];
arr.sort();
console.log(arr);
 */

/* let arr = [1,2,3,4,5];
arr.reverse();
console.log(arr);
 */
/* 
let names = "BIlbo,Gandalf,Nazgul";
let arr = names.split(",",1);
console.log(arr); */

let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(users) {
        return user.age >= this.minAge && user.age < this.maxAge;

    }
};

let users = [
    { age: 16 },
    { age: 20 },
    { age: 23 },
    { age: 30 }
];








