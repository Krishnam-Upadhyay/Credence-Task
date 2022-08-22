let animal = {
    jumps: null
};
let rabbit = {
    __proto__: animal,
    jumps: true
}
console.log(rabbit.jumps)//true value will be showed caust jumps propertie found in rabbit object

delete rabbit.jumps;
console.log(rabbit.jumps);//This will prototypically inherit property from the animal object will show on console null value

delete animal.jumps;
console.log(animal.jumps);//THis will print undefined couse jumps property is not defined in bothe the objects;
