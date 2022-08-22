let user = {
    name: "John",
    surname: "Smith",
    set fullName(value) {
        [this.name, this.surname] = value.split(" ");

    },
    get fullName() {
        return this.name + " " + this.surname;
    }
};

let admin = {
    __proto__: user,
    isAdmin: true
};

console.log(admin.fullName);//John Smith
admin.fullName = "Krishnam upadhyay";
console.log(admin.fullName);//This will give krishnam Upadyay;

console.log(admin.fullName);
console.log(user.fullName);