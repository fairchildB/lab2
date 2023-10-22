// Question 1 - How many vowels?
// Write code that counts the number of vowels in a string.
// +1 bonus points if you ask for the string from the user

var sentence = "How many vowels do you think are in this one?";
// Your solution goes here.
function sentence(str)
{
    return str.replace(/[^aeiou]/g, "").length;
}

console.log(sentence("How many vowels do you think are in this one?"));

//source: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-54.php 
//I used this resource to get code for the first problem. 


// Question 2 - Odd Addition
// You'll be given three arrays containing two numbers each. 
// Write a script that checks if the numbers are odd or even.
// If they are odd, multiple them and return or print the results.
// If they are even, add them and return or print the results.
// For example, [3, 5] would return 15; but [3, 6] would result in 9

const first = [5, 7];
const second = [12, 3];
const third = [7, 7];
// Your solution goes here

function oddOrEvenOperation(arr) {
  const [num1, num2] = arr;

  if (num1 % 2 !== 0 && num2 % 2 !== 0) {
   
    return num1 * num2;
  } else {
  
    return num1 + num2;
  }
}

const result1 = oddOrEvenOperation(first);
const result2 = oddOrEvenOperation(second);
const result3 = oddOrEvenOperation(third);

console.log(result1); 
console.log(result2); 
console.log(result3); 

//source: https://www.geeksforgeeks.org/javascript-program-to-check-if-a-number-is-odd-or-even/
//I used this resource to help with the even or odd script.
//OpenAI. (2023). ChatGPT (September 25 Version) [Large language model]. https://chat.openai.com 
//I used this resource to write the return functions. 
  
 
  




// Question 3 - Twenty One
// You'll receive three arrays with two numbers again.
// If the two numbers add up to 21, return True
// If they don't, return False unless they are identical
// If they are identical, return "Split"

const p = [19, 2];
const q = [4, 6];
const r = [16 ,16];
// Your solution goes here

function twentyone(p) { return "True"; }
console.log("True");
function nottwentyone(q) { return "False"; }
console.log("False");

function split(r) { return "Split"; }
console.log("Split");



// Question 4 - FizzBuzz
// This is a classic programming question.
// Print out the numbers from 1 to 100, except
// If the number is a multiple of three, print Fizz
// If the number is a multiple of five, print Buzz
// If the number is a multiple of three and five, print FizzBuzz
// Your output might look something like 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz ....

// Your solution goes here

for (var i = 1; i < 101; i++) {
    if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else if (i % 15 == 0) console.log("FizzBuzz");
    else console.log(i);
}

//https://flexiple.com/javascript/fizzbuzz-javascript
//I used this resource to get code for this problem




//Question 5 - Start my car
// Create a car variable (object)
// Give it the properties of make, model, year, and color
// Give it a start method that returns to the console "Vroom vroom! Car started!" or something similar
// Call the start method

Your solution goes here

let car = {
    make: "Buick",
    model: "Century",
    year: 2004,
    color: "red",
    start: function() {console.log("Vroom vroom!"); }
};

car.start()

//source: I used the example in the class slides to solve this problem. 


//Question 6 - How many states are there?
// Ok, this seems silly, but we're actually going to work with AJAX to get some data and process it
// You need to load a geojson file, convert it to json, and then count up the number of entires it has...
// In other words, print out to the console log the number of airports in the data set
// You'll want to use chapter 3 of the roth textbook and our Monday lecture here.
// +2 bonus points if you tell me first how many total airports there are and then how many civilian 
// feel free to explore the data in QGIS (or arc). If you know how to answer the question in QGIS, how do you transfer it to javascript?

const fs = require('fs'); 

const geojsonFilePath = 'airports.geojson'

fs.readFile(geojsonFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading GeoJSON file:', err);
        return;
    }

    try {
        const geojson = JSON.parse(data);

        // Check if it's a valid GeoJSON object
        if (geojson.type === 'FeatureCollection' && Array.isArray(geojson.features)) {
            const featureCount = geojson.features.length;
            console.log(`Number of features in the GeoJSON file: ${featureCount}`);
        } else {
            console.log('Error');
        }
    } catch (parseError) {
        console.error('Error', parseError);
    }
});

//source: OpenAI. (2023). ChatGPT (September 25 Version) [Large language model]. https://chat.openai.com
//I used this resource for my code. 

// Question 7 - Dynamically creating a list
// This problem draws heavily from Chapter 2 of your workbook (the Roth et al.), so make sure to review there if you're stuck!
// I'm going to give you two arrays as variables. One will have city names, the other their populations.
// You need to create a FUNCTION that takes in the two arrays (so the data is not created within them, this is different from the example in Chapter 2)
// The function should take in the arrays, combine them into an HTML FORMATTED TABLE
// The table should be added to an imaginary div with the id "mydiv"

var cities = ['Corvallis', 'Portland', 'Eugene', 'Albany'];
var pops = [59920, 652500, 176650, 56470];




function createTable(cities, pops) {
t
    var table = document.createElement("table");


    var headerRow = table.insertRow(0);


    var cityHeader = headerRow.insertCell(0);
    cityHeader.innerHTML = "City";


    var popHeader = headerRow.insertCell(1);
    popHeader.innerHTML = "Population";


    for (var i = 0; i < cities.length; i++) {
        var row = table.insertRow(i + 1);


        var cityCell = row.insertCell(0);
        cityCell.innerHTML = cities[i];


        var popCell = row.insertCell(1);
        popCell.innerHTML = pops[i];
    }


    var mydiv = document.getElementById("mydiv");
    mydiv.appendChild(table);
}


createTable(cities, pops);





<!DOCTYPE html>
<html>
<head>
    <title>City Population Table</title>
</head>
<body>
    <div id="mydiv"></div>

    <script>
        function createTableFromArray(cities, pops) {
            var table = document.createElement("table");

            var headerRow = table.insertRow(0);

            var cityHeader = document.createElement("th");
            cityHeader.innerHTML = "City";
            headerRow.appendChild(cityHeader);

            var popHeader = document.createElement("th");
            popHeader.innerHTML = "Population";
            headerRow.appendChild(popHeader);

            for (var i = 0; i < cities.length; i++) {
                var row = table.insertRow(i + 1);

                var cityCell = row.insertCell(0);
                cityCell.innerHTML = cities[i];

                var popCell = row.insertCell(1);
                popCell.innerHTML = pops[i];
            }

            var myDiv = document.getElementById("mydiv");
            myDiv.appendChild(table);
        }

        var cities = ['Corvallis', 'Portland', 'Eugene', 'Albany'];
        var pops = [59920, 652500, 176650, 56470];
        createTableFromArray(cities, pops);
    </script>
</body>
</html>


//source: OpenAI. (2023). ChatGPT (September 25 Version) [Large language model]. https://chat.openai.com
// I heaviy relided on this resource for my script.