let head = {
    glasses: 1
};

let table = {
    pen: 3,
    __proto__: head
};

let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
}

let pockets = {
    money: 2000,
    __proto__: bed
}

console.log(pockets.pen);//pen propety found in table show pocket prototypicall inheritaing this property fromt the table object

console.log(bed.glasses);//bed object don't have glasses property.show it is inheriting this property from the head object.
