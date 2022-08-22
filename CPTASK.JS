/* function Rabbit() { }
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();
console.log(rabbit.eats);
Rabbit.prototype = {};
console.log(rabbit.eats);//will five true
 */

//2 And if the code is like this (replaced one line )

/* function Rabbit(){}
    Rabbit.prototype = {
        eats:true
    };

let rabbit = new Rabbit();
Rabbit.prototype.eats= false;
console.log(rabbit.eats); */

//3 An like this

function Rabbit() { }
Rabbit.prototype = {
    eats: true

};
/* let rabbit = new Rabbit();
delete rabbit.eats;
console.log(rabbit.eats);//true


 */
//4 The last varient:

function Rabbit() { }
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();
delete Rabbit.prototype.eats;

console.log(rabbit.eats);//Value is undefined


//5 Create an object with the same constructor

let obj2 = new obj.constructor();















