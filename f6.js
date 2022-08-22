//No matter where the method is found : ina an object or its prototype .In a method call "this" this object will always perefer to the object befor the dot.


let animal = {
    walk() {
        if (!this.isSleeping) {
            console.log("I walk");
        }
    },
    sleep() {
        this.isSleeping = true;
    }

};

let rabbit = {
    name: "White Rabbbit",
    __proto_: animal
};


rabbit.sleep();
//modifies rabbit.isSleepig;
console.log(rabbit.isSleeping);
console.log(animal.isSleeping);
