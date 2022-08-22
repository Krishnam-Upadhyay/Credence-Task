//WRITING DOES'NT USE PROTOTYPE
let animal = {
    eats: true,
    walk() {
        //this method wou'nt be used by rabbit
    }

}

let rabbit = {
    __proto__: animal
};

rabbit.walk = function () {
    console.log(("Rabbit!Bounce-bounce!"));
};
rabbit.walk()
