
//Dataset
let dishes = [
    {
        "id": 1,
        "name": "Pizza",
        "cuisine": "Italian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 2,
        "name": "Spaghetti",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 3,
        "name": "Ravioli",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 4,
        "name": "Enchiladas",
        "cuisine": "Mexican",
        "servings": 6,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 5,
        "name": "Tacos",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 6,
        "name": "Burrito Supreme",
        "cuisine": "Mexican",
        "servings": 1,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 7,
        "name": "Elote",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["corn", "cheese"]
    },
    {
        "id": 8,
        "name": "Crepes",
        "cuisine": "French",
        "servings": 1,
        "ingredients": ["flour", "sugar"]
    },
    {
        "id": 9,
        "name": "Corned Beef & Cabbage",
        "cuisine": "Irish",
        "servings": 10,
        "ingredients": ["beef", "cabbage"]
    },
    {
        "id": 10,
        "name": "Beef Stew",
        "cuisine": "Irish",
        "servings": 8,
        "ingredients": ["beef", "tomato"]
    },
    {
        "id": 11,
        "name": "Lasagna",
        "cuisine": "Vegetarian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 12,
        "name": "Falafel",
        "cuisine": "Vegetarian",
        "servings": 1,
        "ingredients": ["chickpea", "parsley"]
    },
    {
        "id": 13,
        "name": "Chili",
        "cuisine": "Vegetarian",
        "servings": 13,
        "ingredients": ["tomato", "chickpea"]
    },
    {
        "id": 14,
        "name": "Goulash",
        "cuisine": "Hungarian",
        "servings": 15,
        "ingredients": ["beef", "tomato"]
    },
]

////Example function
//function findMexicanFood(){
//    //Debug tip: Add a console.log(el) inside the filter function to get a visualization of what el represents and see all its properties
//    let results = dishes.filter(function(el){
//        if(el.cuisine === "Mexican"){
//            return true;
//        }
//        else{
//            return false;
//        }})

//    //Debug tip: Place a Breakpoint on the return AFTER the filter, then hover over "results" to see results of filter without having to step through the whole thing!

//    return results;
//}

//let mexicanFood = findMexicanFood();
//console.log('Mexican Foods: ', mexicanFood)



////1. Create a function that will return all dishes with the cuisine type of "vegetarian"
////Filter

//function problemOne(){

//    let results;


//    return results;
//}

//2. Create a function that will return all dishes with the cuisine type of "Italian" and a serving size greater than 5.
//Filter
// What am I doing?
// Filtering all cuisine types to equal Italian with serving size >5

function problemTwo() {
    let result = dishes.filter(function (el){
        if (el.cuisine == 'Italian' && el.servings > 5) {
        return true;
        }
        else{
            return false;
        }})
    return result;
}
problemTwo()
let italianFood = problemTwo(); 
console.log("Italian Foods: ", italianFood)

//3. Create a function that will return only dishes whose serving id number matches their serving count.
//Filter

function problemThree() {
    let result = dishes.filter(function (el) {
    if (el.servings == el.id) {
    return true;
    }
    else{
        return false;
    }})
return result;
}
problemThree()
let dishesMatch = problemThree();
console.log("Matching id and servings: ", dishesMatch)

////4. Create a function that will return only dishes whose serving count is even.
////Filter

function problemFour() {
    let result = dishes.filter(function (el) {
        if (el.servings %= 2) {
            return true;
        }
        else{
            return false;
        }})
    return result;
}
problemFour()
let evenServings = problemFour();
console.log("Servings are even: ", evenServings)

////5. Create a function that will return dishes whose ingredients array INCLUDES "chickpea".
////Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
////Filter
function problemFive() {
    let result = dishes.filter(function (element) {
        if (element.ingredients.includes("chickpea")) {
            return true;
        }
        else {
            return false;
        }})
    return result;
}
let dishesChickpea = problemFive()
console.log("Dishes with chickpeas: ", dishesChickpea)
////6a. Create a function that will return an array of only the names of the cuisine types. Ie ['Italian', 'Mexican', ...]
////Map

//function italianMexicanOnly() {
//    let newArray = dishes.map(function (element) {
//        if (element.cuisine == 'Italian') {
//            return element.cuisine;
//        }
//        else if (element.cuisine == 'Mexican') {
//            return element.cuisine;
//        }
//    })
//    return newArray;
//}
//let newerArray = italianMexicanOnly()
//console.log(newerArray)

function italianMexicanOnly() {
    let newArray = dishes.map(function (element) {
        if (element.cuisine == 'Italian') {
            return element.name;
        }
        else if (element.cuisine == 'Mexican') {
            return element.name;
        }
    })
    return newArray;
}
let newestArray = italianMexicanOnly()
console.log(newestArray)
//// BONUS: (come back to this after finishing all)
////6b. Use the filter method to eliminate duplicates, leaving only distinct values in the array
//function problemSixb() {
//}


////7. Create a function that will append the cuisine type to the start of the dish's name. Ie, "Italian Pizza"
////Map
//function problemSeven() {
//}

function newDishNames() {
    let result = dishes.map(function (el) {
        return el.cuisine +" "+ el.name;
    })
    return result;
}
let cuisineTypeName = newDishNames()
console.log(cuisineTypeName)

////8. Create a function that will append the cuisine type to the start of the dish's name. Then, return only the Vegetarian dish objects. So this function should return objects 11-13 with their names changed to "Vegetarian Lasagna", "Vegetarian Falafel", "Vegetarian Chili"
////Map, Filter
//function problemEight() {
//} 

//BONUS

//5. Create a function that will return dishes whose ingredients array INCLUDES "tomato" OR "cheese".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Filter

//10. Create a function that will return the total serving count of all dishes.
//Must use Reduce, not a loop.

//11. Create a function that will return an array of any objects that do not share a cuisine type with any other objects.

