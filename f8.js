//Obj.hasOwnProperty(key)
let animal = {
    eats: true
};

let rabbit = {
    jumps: true,
    __proto__: animal
}

for (let prop in rabbit) {
    let isOwn = rabbit.hasOwnProperty(prop);
    if (isOwn) {
        console.log("our: " + " " + prop);//Our:jumpa
    } else {
        console.log("Inherited : " + " " + prop); //Inherited: eats
    }
};
