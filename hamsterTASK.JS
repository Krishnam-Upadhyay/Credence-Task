let hamster = {

    eat(food) {

        this.stomach.push(food);
    }

};

let speedy = {
    stomach: [],
    __proto__: hamster
};

let lazy = {
    stomach: [],
    __proto__: hamster
};

speedy.eat("apple");
console.log(speedy.stomach);//THis will show apple

console.log(lazy.stomach);//THis will also show apples

