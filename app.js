// QUESTION1 
// Declare an empty array using JS literal notation to store
// student names in future.


// let fruitsName = ["apple","mango","banana","pineapple","orange"];

// QUESTION 2

// Declare an empty array using JS object notation to store
// student names in future.


// let fruitsName = new Array();


// QUESTION 3


// Declare and initialize a strings array.


// let fruitsName = ["apple" , "banana" , "mango"];

// QUESTION 4

// Declare and initialize a numbers array.

// let numbers = [10, 20, 30, 40, 50];


// QUESTION 5

// Declare and initialize a boolean array.


// let boolean = [true, false, true, true, false];

// QUESTION 6

// Declare and initialize a mixed array.

// let mixedArray = [10, "Hello", true, "", null, "**"];

// QUESTION 7

// Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

// document.write("<h1>Qualification</h1>")

// document.write("<ol>");

// document.write("<li>SSC</li>");

// document.write("<li>HSC</li>");
// document.write("<li>BCS</li>");
// document.write("<li>BS</li>");
// document.write("<li>BCOM</li>");
// document.write("<li>MS</li>");
// document.write("<li>M.PHIL.</li>");
// document.write("<li>PhD</li>");

// QUESTION 8

// Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:


// let studentNames =["Michael","John","Tony"];

// let marksScored = [320,230,480];

// let totalMarks = 500;

// let percentage = (marksScored/totalMarks)*100;

// document.write("Score of " +  [studentNames[0]] + " is " + [marksScored[0]] + 
//     " percentage is " + ([marksScored[0]]/totalMarks)*100 + "%" +  "<br>");

// document.write("Score of " +  [studentNames[1]] + " is " + [marksScored[1]] + 
//   " percentage is " + ([marksScored[1]]/totalMarks)*100 + "%" +   "<br>");

// document.write("Score of " +  [studentNames[2]] + " is " + [marksScored[2]] + 
//     " percentage is " + ([marksScored[2]]/totalMarks)*100 + "%" + "<br>");


// QUESTION 9

// Initialize an array with color names. Display the array
// elements in your browser.

// let colorNames =[" red"," blue "," yellow "," green "," black"];

// document.write(colorNames + "<br>");

// // a. Ask the user what color he/she wants to add to the
// // beginning & add that color to the beginning of the array.

// let userColor = prompt("What color do you want to add to the beginning of the array?");

// colorNames.unshift(userColor);

// document.write(colorNames + "<br>");
// // 
// b. Ask the user what color he/she wants to add to the end
//  add that color to the end of the array. Display the
// updated array in your browser.

// let userColor2 = prompt("What color do you want to add to the end of the array?");

// colorNames.push(userColor2);

// document.write(colorNames + "<br>");

// // c. Add two more color to the beginning of the array.
// // Display the updated array in your browser.

// colorNames.unshift("skyblue","voilet");
// document.write(colorNames + "<br>");


// // d. Delete the first color in the array. Display the updated
// // array in your browser.


// colorNames.shift();

// document.write(colorNames + "<br>");

// e. Delete the last color in the array. Display the updated
// array in your browser.

// colorNames.pop();

// document.write(colorNames + "<br>");

// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// // browser.

// let userNewColor= prompt("write your desired color name ");
// userIndex = prompt("write your desired color name index number");


// colorNames.splice(2,0,"green","black");
// document.write(colorNames);


// QUESTION 10

// Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// // method.



// let studentsScore = [320,230,480,120];

// document.write("Score of student : " + studentsScore + "<br>");

// document.write("Ordered score of students : " + studentsScore.sort() + " <br> ");

// QUESTION 11

// Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

// let cityNames=["Karachi","Lahore","Islamabad","Quetta","Peshawar"];

// document.write("Cities List :"+ cityNames +'<br>');

// let selectedCities= cityNames.slice(2,4);

// document.write('Selectedcities List :'+ selectedCities +'<br>');

// QUESTION 12

// Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)


// let array =["This","is","my","cat"];

// document.write("Array: " + array + "<br>");

// document.write(array.join(" "));

// QUESTION 13

// Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

// let devices = ["keyboard", "mouse", "printer", "monitor"];

// let out = devices.shift();

// document.write("Devices : " + devices + "<br>");

 
// document.write("Out" + "<br>" + out + "<br>");


//  document.write("Out" + "<br>" + out + "<br>");

// document.write("Out" + "<br>" + out + "<br>");


//  document.write("Out" + "<br>" + out + "<br>");

// QUESTION 14

// Create a new array. Store values one by one in such a way

// that you can access the values in reverse order. (Last In-
// First Out)

// let devices = ["keyboard", "mouse", "printer", "monitor"];



// document.write("Devices : " + devices + "<br>");
 

 
// document.write("Out" + "<br>" + devices.pop() + "<br>");


//  document.write("Out" + "<br>" + devices.pop()+ "<br>");

 

// document.write("Out" + "<br>" + devices.pop() + "<br>");


//  document.write("Out" + "<br>" + devices.pop() + "<br>");

// QUESTION 15

//  Write a program to store phone manufacturers 
// (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. 
// Display the following dropdown/select menu in  browser using document.write() method: 

//  let phoneMenu = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
//  let index = 0;

//  document.write("<select>")

//  document.write("<option>" + phoneMenu[index++] + "</option>")

//  document.write("<option>" + phoneMenu[index++] + "</option>")

//  document.write("<option>" + phoneMenu[index++] + "</option>")

//  document.write("<option>" + phoneMenu[index++] + "</option>")

//  document.write("<option>" + phoneMenu[index++] + "</option>")

//  document.write("<option>" + phoneMenu[index++] + "</option>")

//  document.write("</select>")
 




 