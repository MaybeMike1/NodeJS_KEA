// --------------------------------------
// Arrays, for loops
// --------------------------------------
// Exercise 1 - Array Positioning

const letters = ["a","b","c"];
// show b in the console 

for(let i = 0; i < letters.length; i++) {
    if(letters[i] == "b"){
        console.log(letters[i]);

    }
}

console.log(letters[1]);

// --------------------------------------
// Exercise 2 - Array Positioning

const friends = [];

// What a lonely array. Add at least 3 friend objects to it.  

friends[0] = {"name" :"Thomas", "age": 22};
friends[1] = {"name" : "Carl", "age" : 35};
friends[2] = {"name" :"Jamie", "age" : 30}

console.log(friends)

// --------------------------------------
// Exercise 3 - 
 

const significantMathNumbers = [0, 2.718, 3.14159, 1729];

// You want to programmatically find where the number 1729 is in the array.
// programmatically means that no finger counting allowed. There is a method for this (finding index based of value). 

const searchedIndex = significantMathNumbers.indexOf(1729);
console.log("Searched Index is at " + "[" + searchedIndex + "]");

// --------------------------------------
// Exercise 4 - Inserting elements

const diet = ["tomato", "cucumber", "rocket"];

// You are a programmer. In one line (one statement) insert hamburger, soda and pizza between the elements cucumber and rocket


diet.splice(2,0,"hamburger", "soda", "pizza")
console.log(diet);


// --------------------------------------
// Exercise 5 - Remove element

// Remove the LAST element of the array.
// Don't remove by index. You know in advance that it's the last in the array because you are too full already. 

diet.pop();
console.log(diet);



// --------------------------------------
// Exercise 6 - Copy array

// You really like your daily diet from last exercise. Copy it to a new array called dinnerTray so you can give it to a friend.  

dinnerTray = diet.copyWithin(0, diet.length);
console.log("DinnerTray " + dinnerTray)

// --------------------------------------
// Exercise 7 - For loop

const lettersExpanded = ["a","b","c", "d", "e", "f", "g", "h"];

// log every second char in the array starting from b

for(let k = 1; k < lettersExpanded.length; k++) {
    console.log(lettersExpanded[k])
}

// --------------------------------------
// Exercise 8 - For loop and if statement

const numbers  = [5, 3, 2, 7, 11, 12, 0, -20, 6];

const discardedNumbers = [];

for(let l= 0; l < numbers.length;l++){
    if(numbers[l] > 6 ){
        console.log("Position in array " +"["+ l + "]" + " = "  + numbers[l])
    }
    if(numbers[l] < 0){
        console.log(numbers[l])
    } else
    discardedNumbers.push(numbers[l])
}

console.log(discardedNumbers)
// log the element if the number is above 6 or below 0
// else push them to the array discardedNumbers

// --------------------------------------