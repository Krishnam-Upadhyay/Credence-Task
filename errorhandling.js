/* try{
   console.log('Start of try runs');
   asdasd
   alert("Start of try runs: ");
}catch{
    alert("try is ingnored , because ther is error");
}


 */
//TASK
/* function f() {
    try {
        alert('start');
        return "result";
    } catch (err) {
        /// ...
    } finally {
        alert('cleanup!');
    }
}

f(); // cleanup! */


/* class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}
function test() {
    throw new ValidationError("Whoops!");
}
try {
    test();
} catch (err) {
    console.log(err.message);
    console.log(err.name);
    console.log(err.stack);
} */