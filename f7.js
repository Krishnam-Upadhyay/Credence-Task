//FOR IN LOOP

let animal = {
    eats: true
};

let rabbit = {
    jumps: true,
    __proto__: animal
};

//Object  keys only returns own keys
console.log(Object.keys(rabbit));
//FOR IN LOOP
for (let prop in rabbit) {
    console.log(prop);
}