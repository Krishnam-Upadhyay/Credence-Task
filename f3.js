


//PROTOTYPE CHIAN CAN BE LONGER

let animal = {
    eats: true,
    walk() {
        console.log("Animal walk");
    }
};

let rabbit = {
    jumps: true,
    __proto__: animal
}

let longEar = {
    earLength: 10,
    __proto__: rabbit

};

//walk is taken from the protype chain
longEar.walk()//Animal walk
console.log(longEar.jumps);//true portotypically inherited fromt he rabbit onejct;







