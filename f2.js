//IF WE HAVE A METHOD IN ANIMLA IT CAN BE CALLED ON RABBIT;
let animal = {
    eats: true,
    walk() {
        console.log("Animal walk");
    }
};

let rabbit = {
    jumps: true,
    __proto__: animal
};

//Here rabiit will prototypically inherit property from the animal object

rabbit.walk();//output will be animal walk