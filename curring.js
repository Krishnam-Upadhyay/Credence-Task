/* function curry(f){
    return function(a){
        return function(b){
            return f(a,b)
        };
    };
}

function sum(a,b){
    return a+b;
}

let curriedSum = curry(sum);
console.log(curriedSum(1)(2)); */


/* function log(date,importance,message){
    console.log(`[${date.getHours()}:${date.getMinutes()}][${importance}] ${message}`);
}
log = _.curry(log);
log(new Date())("DEBUG")("some debug");
logNow("INFO","Message");

let debugNow = logNow("DEBUG");
debugNow("message"); */


/* function curry(funct){
    return function curried(...args){
        if(args.length>=funct.length){
            return funct.apply(this,args);
        }else{
            return function(...args2){
                return curried.apply(this,args.concat(args2));
            }
        }
    };
}
 */


