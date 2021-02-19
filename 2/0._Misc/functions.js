//create a function call myFirstFunction which return a greetings

function myFirstFunction(){
    return "Greetings";
}

console.log(myFirstFunction());

const myVariableFunction = function() {
    console.log("Hello from the the anonymous function")
};

myVariableFunction();

const myArrowFunction = ( ) => {
    console.log("Hello from the the anonymous function which is also an arrow function")
}

myArrowFunction();

const sayHi = () => {
    console.log("Hi")
}

const sayHello = () => {
    console.log("Hello")
};

function sayHiLater(anyFunctionReference){
    //simulate some code running
    //.. 5 seconds later ..
    anyFunctionReference();
    
}

sayHiLater(sayHi);
sayHiLater(sayHello);

function interact(genericInteration, name) {
    console.log(genericInteration(name));
}

const poke = (name) => {
    return "poke " + name
}

interact(poke, "Sebastian");

//const arrowInteract = (name) => {return "lick " + name}

interact((name) => {return "lick " + name}, "Biden");