// X=====X=======X=======X=======X========X=======X=======X========X=======X=========X=========X======X========X======X

console.log(`__________________________________________________________________________________________________________
    2. Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
`);



let peronName: string = 'Muneeb ur rehman';
console.log(peronName);


// X=====X=======X=======X=======X========X=======X=======X========X=======X=========X=========X======X========X======X

console.log(`__________________________________________________________________________________________________________
    3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
        `);


let myName: string ='muneeb' 

console.log(myName.toLowerCase()); 
console.log(myName.toUpperCase()); 
console.log(myName.charAt(0).toUpperCase() + myName.slice(1).toLowerCase()); 


// X====X=======X=======X=======X========X=======X=======X========X=======X=========X=========X======X========X======X

console.log(`__________________________________________________________________________________________________________
    4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the
following, including the quotation marks:
Albert Einstein once said, “A person who never made a mistake never tried anything new.”

`);

console.log(`Albert Einstein once said, “A person who never made a mistake never tried anything new.”`);


// X=====X=======X=======X=======X========X=======X=======X========X=======X=========X=========X======X========X======X

console.log(`__________________________________________________________________________________________________________
    5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
`);

const famousPerson: string = "Albert Einstein";
const message: string = "A person who never made a mistake never tried anything new."
console.log(`${famousPerson} once said, ${message}`);


// X=====X=======X=======X=======X========X=======X=======X========X=======X=========X=========X======X========X======X

console.log(`__________________________________________________________________________________________________________
    6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each

    `);

let personName: string = "\n \t muneeb ur rehman \t";
console.log(personName);


// X=====X=======X=======X=======X========X=======X=======X========X=======X=========X=========X======X========X======X

console.log(`__________________________________________________________________________________________________________
    7. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results. 

    `);

let addition: number = 2+6
let subtraction: number = 20-12
let division: number = 56/7
let multiplication: number =4*2

console.log(addition);
console.log(subtraction);
console.log(division);
console.log(multiplication);


// X=====X=======X=======X=======X========X=======X=======X========X=======X=========X=========X======X========X======X

console.log(`__________________________________________________________________________________________________________
    8. You should create four lines that look like this:
    console.log(5 + 3)   
    Your output should simply be four lines with the number 8 appearing once on each line.

`);

console.log(`Addition: ${4 + 4 }`);
console.log(`Subtraction: ${12 - 4}`);
console.log(`Division: ${32 / 4}`);
console.log(`Multiplication ${2 * 4}`);


// X=====X=======X=======X=======X========X=======X=======X========X=======X=========X=========X======X========X======X

console.log(`__________________________________________________________________________________________________________
    9. Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
    `);

const myFavNumber: number = 7;
console.log(`My favourit Number is ${myFavNumber}`);


// X=====X=======X=======X=======X========X=======X=======X========X=======X=========X=========X======X========X======X

console.log(`__________________________________________________________________________________________________________
    10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

    `);

// Hello this is comment // double forward slash// 


// X=====X=======X=======X=======X========X=======X=======X========X=======X=========X=========X======X========X======X

console.log(`__________________________________________________________________________________________________________
    11. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

    `);


let names: string[] = ["ali","hasan","kashif",'jameel'];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// X=====X=======X=======X=======X========X=======X=======X========X=======X=========X=========X======X========X======X

console.log(`__________________________________________________________________________________________________________
    12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

`);


let names1: string[] = ["ali","hasan","kashif",'jameel'];
const message1: string = "How are you?"
for (let i = 0; i < names1.length; i++) {
    console.log(`Hello ${names1[i]}, ${message1}`);
};

// X=====X=======X=======X=======X========X=======X=======X========X=======X=========X=========X======X========X======X

console.log(`__________________________________________________________________________________________________________
    13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

`);


const transportation: string[] = ["car","bike","cycle"];
const message2: string = "I would like to own";
for(let i = 0; i < transportation.length; i++){
    console.log(message2,"a", transportation[i]);
} 

// X=====X=======X=======X=======X========X=======X=======X========X=======X=========X=========X======X========X======X

console.log(`__________________________________________________________________________________________________________
    14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

`);


const guestsList: string[] = ["ali","hasan","kashif"];
const message3: string = "I'm inviting you for dinner tonight"
for(let i = 0; i< guestsList.length; i++){
    console.log(`Hello ${guestsList[i]}, ${message3}`);
}

// X=====X=======X=======X=======X========X=======X=======X========X=======X=========X=========X======X========X======X

console.log(`__________________________________________________________________________________________________________
    15. Changing Guest List: You just heard that one of your guests can’t make the
dinner, so you need to send out a new set of invitations. You’ll have to think of
someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the
end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with
the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still
in your list.
_
`);


const guestsList1: string[] = ["ali","hasan","kashif"];
const message4: string = "I'm inviting you for the dinner tonight"

console.log(`${guestsList1[2]} can't come to the dinner`);
guestsList1.splice(2,1,"umar")
for(let i = 0; i< guestsList1.length; i++){
    console.log(`Hello ${guestsList1[i]}, ${message4}`);
}

// X=====X=======X=======X=======X========X=======X=======X========X=======X=========X=========X======X========X======X

console.log(`__________________________________________________________________________________________________________
    16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.                 
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.

`);


const guestsList2: string[] = ["ali","hasan","kashif"];
const message5: string = "I'm inviting you for the dinner tonight"
console.log("I found a bigger dinner table");
guestsList2.unshift("hammad");
guestsList2.splice(2,0,"taimoor");
guestsList2.push("yaseen");

for(let i=0; i< guestsList2.length; i++){
    console.log(`Hello ${guestsList2[i]},${message5}`);
    
}

// X=====X=======X=======X=======X========X=======X=======X========X=======X=========X=========X======X========X======X

console.log(`__________________________________________________________________________________________________________
    17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

`);


while (guestsList.length>2){
    let remove=guestsList.pop()
    console.log(`sorry${remove}, i can't invite you to dinner`);
}
guestsList.forEach(guest => {console.log(guest ,"you are still invited to the dinner");
})
guestsList.splice(0,guestsList.length)
console.log(guestsList);

// X=====X=======X=======X=======X========X=======X=======X========X=======X=========X=========X======X========X======X

console.log(`__________________________________________________________________________________________________________
    18. Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order. 
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has 
changed.

`);

let places: string[] = ["makkah","madina","london","paris","newyork","Dubai"];
console.log("original order:", places);
console.log("alphabetical order:", [...places].sort());
console.log("original order:", places);
console.log("original order:", [...places].sort().reverse());
console.log("original order:", places);
places.reverse()
console.log("original order:", places);
places.reverse()
console.log("original order:", places);
places.sort()
console.log("original order:", places);
places.sort().reverse()
console.log("original order:", places);
places.sort()
console.log("original order:", places);

// X=====X=======X=======X=======X========X=======X=======X========X=======X=========X=========X======X========X======X

console.log(`__________________________________________________________________________________________________________
    19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

    `);

const guestsList3: string[] = ["ali","hasan","kashif","jamal","uzaima","mohsin","imran","waseem"];
console.log(`i'm inviting ${guestsList3.length} peoples for the dinner`);


// X=====X=======X=======X=======X========X=======X=======X========X=======X=========X=========X======X========X======X

console.log(`__________________________________________________________________________________________________________
    20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anythingelse you’d like. Write a program that creates a list containing these items.

    `);
const countries: string[]= ["uk","u.a.e","france","switserland","usa","ksa"]
console.log(`countries i'd like to visit ${countries}`);


// X=====X=======X=======X=======X========X=======X=======X========X=======X=========X=========X======X========X======X

console.log(`__________________________________________________________________________________________________________
21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

`);

let studentDetails = {
    name:"muneeb ur rehman",
    id: 3321,
    addres:"h.no 706 dha phase 11",
    contact: 12345

}
console.log(studentDetails);


// X=====X=======X=======X=======X========X=======X=======X========X=======X=========X=========X======X========X======X

console.log(`__________________________________________________________________________________________________________
    22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

`);

let arr = ["a","b",2,]
console.log(arr[3]);
console.log(arr[2]);


// X=====X=======X=======X=======X========X=======X=======X========X=======X=========X=========X======X========X======X

console.log(`__________________________________________________________________________________________________________
    23. Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code
should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

`);

// ---
let car = 'subaru';
console.log("is car == 'subaru'? i predict True");
console.log(car == 'subaru');
console.log(car == 'honda');

let color1 = "blue";
let color2 = "red";
console.log("is blue !== red? i predict true ");
console.log(color1 !== color2);//true
console.log(color1 == color2);//false

let mangoColor = 'yello'
console.log(`is mango == 'yello? it's true`);
console.log(mangoColor == 'yello'); //true
console.log(mangoColor == "blue");//false

let num1 = 10;
let num2 = 10;
console.log(`is num1 == num2? its true`);
console.log(num1 == num2);//true
console.log(num1 !== num2);//false

let pakistan = "atmoic power";
console.log(`is pakistan == "atmoic power"? its true`);
console.log(pakistan == "atmoic power");//true
console.log(pakistan == "india");//false

let makkah = 'fav place';
console.log(`is makkah == 'fav place? its true`);
console.log(makkah == 'fav place'); // true
console.log(makkah !== 'fav place');



// X=====X=======X=======X=======X========X=======X=======X========X=======X=========X=========X======X========X======X

console.log(`__________________________________________________________________________________________________________
    24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to (==) (!==) (><) (>=) (<=) (>=)

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array

equality and enequality with strings:-  == , !==

`);

let fruit= "mango"
console.log('testing equality and enequality with string');
console.log("mango" == "mango"); //true
console.log(fruit == "Mango"); //false

console.log('testing using lower case function');
console.log(fruit.toLowerCase() == "mango");//true
console.log(fruit.toUpperCase() == "mango");//false

console.log("Numerical tests:");
console.log(10 > 5); // True
console.log(2 < 1); // False

console.log("Tests with 'and' and 'or':");
console.log(true && false); // False
console.log(true , false); // True

let fruits = ["apple", "banana", "cherry"];
console.log("Is 'apple' in fruits?");
console.log(fruits.includes("apple")); // True

console.log("Is 'mango' not in fruits?");
console.log(!fruits.includes("mango")); // True


// X=====X=======X=======X=======X========X=======X=======X========X=======X=========X=========X======X========X======X

console.log(`__________________________________________________________________________________________________________
    25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a
variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print
a message that the player just earned 5 points.
• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)

`);

let alien_color1: string='green';
if (alien_color1 == 'green'){console.log('you earend 5 points')}
else{console.log("'--'");}


// X=====X=======X=======X=======X========X=======X=======X========X=======X=========X=========X======X========X======X

console.log(`__________________________________________________________________________________________________________
    26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
• Write one version of this program that runs the if block and another that runs the else block.

`);

console.log('the block that runs if block')
let alien_color2: string= "green";
if(alien_color2 == "green"){console.log(`you earned 5 points`)}
else if(alien_color2 !== "green"){console.log(`you earned 10 points`)}

console.log('the block that runs else block')
let alien_color2b: string= "yellow";
if(alien_color2b == "green"){console.log(`you earned 5 points`)}
else if(alien_color2b !== "green"){console.log(`you earned 10 points`)}


// X=====X=======X=======X=======X========X=======X=======X========X=======X=========X=========X======X========X======X

console.log(`__________________________________________________________________________________________________________
    27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

• If the alien is green, print a message that the player earned 5 points.
• If the alien is yellow, print a message that the player earned 10 points.
• If the alien is red, print  a message that the player earned 15 points.
• Write three versions of this program, making sure each message is printed for the appropriate color alien.

`);

let alien_color3 :string = 'green';
console.log('green alien');
if (alien_color3 == 'green'){'player earned 5 points'}
if (alien_color3 == 'yellow'){'player earned 10 points'}
if (alien_color3 == 'red'){'player earned 15 points'}

alien_color3 = 'yellow';
console.log('yellow alien');
if (alien_color3 == 'green'){'player earned 5 points'}
if (alien_color3 == 'yellow'){'player earned 10 points'}
if (alien_color3 == 'red'){'player earned 15 points'}

alien_color3 = 'red';
console.log('red alien');
if (alien_color3 == 'green'){'player earned 5 points'}
if (alien_color3 == 'yellow'){'player earned 10 points'}
if (alien_color3 == 'red'){'player earned 15 points'}


// X=====X=======X=======X=======X========X=======X=======X========X=======X=========X=========X======X========X======X

console.log(`__________________________________________________________________________________________________________
    28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:

• If the person is less than 2 years old, print a message that the person is a baby.

• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
• If the person is age 65 or older, print a message that the person is an elder.

`);

const age: number = 65;
if(age < 2){console.log('this person is a baby');}
else if(age == 2 || age < 4){console.log("this person is a toddler");}
else if(age == 4 || age < 13){console.log("this person is a kid");}
else if(age == 13 || age < 20){console.log("this person is a teenager");}
else if(age == 20 || age < 65){console.log("this person is a adult");}
else if(age >= 65){console.log("this person is a elder");}


// X=====X=======X=======X=======X========X=======X=======X========X=======X=========X=========X======X========X======X

console.log(`__________________________________________________________________________________________________________
    29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas! -->

`);

let favourite_fruit: string[] = ["apple","banana","orange","peach","mango!"];
if(favourite_fruit.includes("apple")){console.log("you really like apple!")};
if(favourite_fruit.includes("banana")){console.log("you really like banana!")};
if(favourite_fruit.includes("orange")){console.log("you really like orange!")};
if(favourite_fruit.includes("peach")){console.log("you really like peach!")};
if(favourite_fruit.includes("mango")){console.log("you really like mango!")};


// X=====X=======X=======X=======X========X=======X=======X========X=======X=========X=========X======X========X======X

console.log(`__________________________________________________________________________________________________________
    30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:

• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

`);

let userNames: string[]= ["asad","ali","hasan","admin","saad"]
for(let i=0; i<userNames.length; i++){
    if(userNames[i] == "admin"){console.log("hello admin, would you like to see a status report!")}
    else{console.log(`hello ${userNames[i]}, thankyou for logging in again!`)}
}

// X=====X=======X=======X=======X========X=======X=======X========X=======X=========X=========X======X========X======X

console.log(`__________________________________________________________________________________________________________
    31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.

`);

let userNames1: string[] = [];
if(userNames.length === 0){console.log("we need some new users")}
else{"'-'"};


// X=====X=======X=======X=======X========X=======X=======X========X=======X=========X=========X======X========X======X

console.log(`__________________________________________________________________________________________________________
    32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username. -->

• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

`);

let current_users: string[]= ["user1","user2","user3","user4","user5"];
let new_users: string[]= ["user16","user2","user11","user5","user10"];

new_users.forEach(newUser=>{
    if(current_users.some(currentUser=>currentUser.toLowerCase() == newUser.toLowerCase())){
        console.log(`${newUser} will need to enter a new username.`);
    }
    else{console.log(`${newUser} is aviable`);
    }
});


// X=====X=======X=======X=======X========X=======X=======X========X=======X=========X=========X======X========X======X

console.log(`__________________________________________________________________________________________________________
    33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.

• Store the numbers 1 through 9 in a array.

• Loop through the array.

• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

`);

let numbers: number[] = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];
for(let i=0; i< numbers.length; i++){
    if(numbers[i] === 1){console.log(`${numbers[i]}st`);}
    else if(numbers[i] === 2){console.log(`${numbers[i]}nd`);}
    else if(numbers[i] === 3){console.log(`${numbers[i]}rd`);}
    else if(numbers[i]){console.log(`${numbers[i]}th`)}
}


// X=====X=======X=======X=======X========X=======X=======X========X=======X=========X=========X======X========X======X

console.log(`__________________________________________________________________________________________________________
    34. Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.

• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you shouldhave one line of output containing a simple statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

`);

let pizzas: string[] =['peppronei','tikka','fajeeta',];
for(let i=0; i<pizzas.length; i++){
    console.log(`i really like pizza!`);
    pizzas.forEach(pizza=>console.log(`i like ${pizza} pizza`)
    )
        console.log(`I like ${pizzas[i]} pizza`);}





// X=====X=======X=======X=======X========X=======X=======X========X=======X=========X=========X======X========X======X

console.log(`__________________________________________________________________________________________________________
    35. Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
• Modify your program to print a statement about each animal, such as A dog would make a great pet.
• Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

`);

let animals: string[] = ["dog","cat","rabbit"];
for(let i=0; i<animals.length; i++){
    console.log(`a ${animals[i]} would make a great pet.`);
}
console.log("Any of these animals would make a great pet!");


// X=====X=======X=======X=======X========X=======X=======X========X=======X=========X=========X======X========X======X

console.log(`__________________________________________________________________________________________________________
    36. T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

`);


function make_tshirt(size:string, text:string){
    console.log(`the size of the t-shirt is "${size}" and the the mesage "${text}" is printed on it!`);}
make_tshirt("small","Never loose hope!!!")

// X=====X=======X=======X=======X========X=======X=======X========X=======X=========X=========X======X========X======X

console.log(`__________________________________________________________________________________________________________
    37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

`);

function make_tshirt1(size="large", text="I Love typescript"){
    console.log(`the size of the t-shirt is "${size}" and the the mesage "${text}" is printed on it!`);}
make_tshirt1("large");
make_tshirt1("medium");



// X=====X=======X=======X=======X========X=======X=======X========X=======X=========X=========X======X========X======X

console.log(`__________________________________________________________________________________________________________
    38. Cities: Write a function called describe_city() that accepts the name of
a city and its country. The function should print a simple sentence, such as
Karachi is in Pakistan. Give the parameter for the country a default value.
Call your function for three different cities, at least one of which is not in the
default country.

`);

function describe_city(city:string, country="pakistan"){
    console.log(`${city} is in ${country}`);
}
describe_city('Lahore')
describe_city('islamabad')
describe_city('toronto','russia')


// X=====X=======X=======X=======X========X=======X=======X========X=======X=========X=========X======X========X======X

console.log(`__________________________________________________________________________________________________________
    39. Write a function called city_country() that takes in the name
of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value
that’s returned.

`);

function city_country(city:string, country:string){
    return `"${city},${country}"`
}
console.log(city_country("karachi","pakistan"))
console.log(city_country("Makkah","saudi arabia"))
console.log(city_country("london","united kingdom"))


// X=====X=======X=======X=======X========X=======X=======X========X=======X=========X=========X======X========X======X

console.log(`__________________________________________________________________________________________________________
    40. Album: Write a function called make_album() that builds a Object
describing a music album. The function should take in an artist name and an
album title, and it should return a Object containing these two pieces of
information. Use the function to make three dictionaries representing different
albums. Print each return value to show that Objects are storing the
album information correctly.
Add an optional parameter to make_album() that allows you to store the
number of tracks on an album. If the calling line includes a value for the number
of tracks, add that value to the album’s Object. Make at least one new
function call that includes the number of tracks on an album.

`);

function make_album(artist: string, title: string, tracks?: number) {
    let album:any = { artist, title };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}

console.log(make_album("Artist One", "The First Album"));
console.log(make_album("Artist Two", "The Second Album"));
console.log(make_album("Artist Three", "The Third Album", 12));

// X=====X=======X=======X=======X========X=======X=======X========X=======X=========X=========X======X========X======X

console.log(`__________________________________________________________________________________________________________
    41. Magicians: Make a array of magician’s names. Pass the array to a function
called show_magicians(), which prints the name of each magician in the array.

`);

let magicians: string[] = ['john','charles','bob']
function show_magicians(magicians:string[]){
    magicians.forEach(names=>console.log(names))
}
show_magicians(magicians)


// X=====X=======X=======X=======X========X=======X=======X========X=======X=========X=========X======X========X======X

console.log(`__________________________________________________________________________________________________________
    42. Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding
the phrase the Great to each magician’s name. Call show_magicians() to
see that the list has actually been modified.

`);


function make_great1(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}

make_great(magicians); 
show_magicians(magicians); 




// X=====X=======X=======X=======X========X=======X=======X========X=======X=========X=========X======X========X======X

console.log(`__________________________________________________________________________________________________________
    43. Unchanged Magicians: Start with your work from Exercise 40. Call the
function make_great() with a copy of the array of magicians’ names. Because the
original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original
names and one array with the Great added to each magician’s name.
let magicians: string[]= ['john','charles','bob']

`);

function make_great(magician:string[]): string[]{
    let greatMagicians:any= [];
    magicians.forEach(magicians=>{
        greatMagicians.push(`${magicians} the great`);
    });
    return greatMagicians;
}
let greatMagicians:any= make_great(magicians.slice())
console.log("original magicians");
show_magicians(magicians)
console.log('great meagicians');
show_magicians(greatMagicians)




// X=====X=======X=======X=======X========X=======X=======X========X=======X=========X=========X======X========X======X

console.log(`__________________________________________________________________________________________________________
    44. Sandwiches: Write a function that accepts a array of items a person wants
on a sandwich. The function should have one parameter that collects as many 
items as the function call provides, and it should print a summary of the sandwich
that is being ordered. Call the function three times, using a different number
of arguments each time.`

);

function sandwiches(...items:string[]){
console.log(`you ordered sandwich with ${items}`)
}
sandwiches("chicken","ketcheup","cheese")
sandwiches("beef","mayo","cheese")
sandwiches("vegitable","mayo","cheese","chillie garlic sauce")



// X=====X=======X=======X=======X========X=======X=======X========X=======X=========X=========X======X========X======X
console.log(`__________________________________________________________________________________________________________
    45. Cars: Write a function that stores information about a car in a Object.                        
The function should always receive a manufacturer and a model name. It
should then accept an arbitrary number of keyword arguments. Call the function
with the required information and two other name-value pairs, such as a
color or an optional feature. 
Print the Object that’s returned to make sure all the information was
stored correctly.`)

function make_car(manufacturer:string, modelName:string, ...other:[string,any][]):object{
    let car:any = {manufacturer, modelName};
    other.forEach(([key,value])=> car[key] = value)
    return car;
}
console.log(make_car("honda","civic",["color","red"],["year","2022"]))
console.log(make_car("toyota","landcuiser",["color","black"],["year","2024"]))
console.log(make_car("tesla","S",["color","white"],["year","2023"]))


