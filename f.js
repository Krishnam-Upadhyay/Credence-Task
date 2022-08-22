/* let obj = {};
alert(obj);
//Checking method Object.prototype
alert(obj.__proto__ === Object.prototype);

//THere is no more prototype in the chain above Object.prototype

alert(Object.prototype.__proto__);
 */

//Achecking the prototype manually
/* let arr =[1,2,3];
alert(arr.__proto__ ===Array.prototype);//wil be true

alert(arr.__proto__.__proto__ ===Object.prototype);//true

alert(arr.__proto__.__proto__.__proto__);//null
 */

//CHANGING NATIVE PROTOTYPE

/* String.prototype.show = function(){
    alert(this);
};
"Krishnam".show();//It will show "Krishnam"

 */

//POLYFILLING
/* if(!String.prototype.repeat){

    String.prototype.repeat = function(n){
        return new Array(n+1).join(this);
    };
}

alert("Krishnam".repeat(4)); */


//BORROWING FROM PROTOTYPES

let obj = {
    0: "Hello",
    1: "world!",
    length: 2

};

obj.join = Array.prototype.join;

alert(obj.join(","));








