/* "use strict"; */


/* //Never do
totalGlobalVariable = "My total global variable";

let someVarToDelete = "DOn't hurt me";
delete someVarToDelete;

console.log(someVarToDelete) */


const myObject = {
    attribute = "value"
};

myObject.attribute = "something else";

console.log(myObject)

let variableA;
let variableB;


console.log(variableA + variableB);
console.log(variableA, variableB);



{
    let scopedVariable = "abc";
    {
        scopedVariable = 123;
    }
}