/* let promise = new Promise(function(resolve,reject){
    resolve(1);
    setTimeout(()=>resolve(2),1000);
});
promise.then(console.log(alert));
 */

//TASK1
/* function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

delay(3000);

//TASK ANIMATED CIRCLE WITH PROMISE
showCircle(150, 10, 100).then(div => {

}) */
/* new Promise(function(resolve,reject){
    setTimeout(()=>resolve(1),1000);

}).then(function(result){
    console.log(result);
    return result*2
}).then(function (result){
    console.log(result);
}).then()
 */
//RETURNING PROMISES

/* new Promise(function(resolve,reject){
    setTimeout(()=>resolve(1),1000);

}).then(function(result){
    console.log(result);
    return new Promise((resolve,reject)=>{
        setTimeout((()=>resolve(result*2),1000));
    });
}).then(function(result){
    console.log(result);
} */

/* class Thenable{
    constructor(num){
        this.num = num;
    }
    then(resolve,reject){
        console.log(resolve)
    }
    then(resolve)
}
 */


//TASK

//ERROR HANDLING WITH PROMISES

/* fetch("https://no-such-server.blabla").then(response=>response.json()).catch(err=>console.log(err)); */

//IMPLICIT TRY..CATCH
/* new Promise((resolve,reject)=>{
    reject(new Error("Whoops!"));

}).catch(console.log(Error));


 */
/* new Promise((resolve,reject)=>{
    throw new Error("Whoops!");
}).catch(function(error){
    console.log("The error is handled, continue normally"+error);
}).then(()=>console.log("Next successful handler runs"))
 */

//TASK Error in setTimeout

/* new Promise(function(resolve,reject){
    setTimeout(()=>{
        throw new Error("Whoops!");
    },1000);
}).catch(alert) */

/* Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
    new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
    new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
]).then(console.log("Alerting"));
 */

/* let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig'
];
let requests = urls.map(url=>fetch(url)) */

/* Promise.all([
    fetch('/template.html'),
    fetch('/style.css')
]) */

/* let urls =[
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://no-such-url'
];
Promise.allSettled(urls.map(url=>fetch(url))). */

/* let promise = Promise.resolve();
promise.then(()=>{
    alert("Promise Done!");
})
alert("Code finished") */

/* Promise.resolve().then(()=>alert("Promise Done!"))
.then(()=>alert("Code Finished")); */
/*
let promise = Promise.reject(new Error("Promise Failed!"));


winedow.addEventListener("unhandledrejection",event =>alert(event.reason));
 */


/* async function f(){
    return 1;
}

f().then(alert); */
/* async function f(){
    return Promise.resolve(1);
}
f().then(alert); */

/* async function f(){
    let promise = new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("Done!"),5000)
    });
    let result = await promise;
    alert(result);//"done!"

}
f(); */

/*
class HttpError extends Error{
    constructor(respnonse){
        super(`${response.status} for ${respnonse.url} `);
        this.name = "HttpError";
        this.respnonse = response;

    }
}

async function loadJson(url){
    let response = await fetch(url); */


//task

/* async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return 10;
}

function f() {
    wait().then(result => alert(result));
}
f();
 */