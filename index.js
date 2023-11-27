/**
 * CODE EXAMPLES
 * comment out each individual section to run code
*/

// OBJECT EXAMPLE //
/*
var cat = {
  name: "Garfield",
  age: 46,
  hungry: true,
  feed: function(){
    if(this.hungry == true){
      return this.name + " is fed";
    } else{
      return this.name + " is not hungry";
    }
  }
}
console.log(cat); //outputs object
console.log( cat.name, cat.age, cat.hungry); //outputs property values
console.log(cat.feed()); //outputs method
*/


// OBJECT CONSTRUCTOR FUNCTION EXAMPLE //
/*
//object contructor 
function Cat(name, age, hungry){
  this.name = name;
  this.age = age;
  this.hungry = hungry;
  this.feed = function(){
    if(this.hungry == true){
      return this.name + " is fed";
    } else{
      return this.name + " is not hungry";
    }
  }
}

//Cat objects created with the new keyword
var cat1 = new Cat("Sylvester", 35, true);
var cat2 = new Cat("Garfield", 46, true);
var cat3 = new Cat("Tom", 46, false);

//array of my Cat objects
var allCats = [ cat1, cat2, cat3];

//feed cats
console.log(cat1.feed());
console.log(cat2.feed());
console.log(cat3.feed());
//outputs allCats array
console.log(allCats);
*/


// SWITCH EXAMPLE //
/*
var output;
var color = 2;
switch(color) {
  case 1 : 
    output = "red";
    break;
  case 2 :
    output = "blue";
    break;
  case 3 : 
    output = "green";
    break;
  default :
    output = "no color";
    break;
}
console.log(output);
*/


// FOR LOOP EXAMPLES //
/*
// count up from 0 to 10
for( var i = 0; i < 11; i++){
  console.log(i);
}

//count down from 10 to 0
for( var j = 10; j >= 0; j--){
  console.log(j);
}
*/


// FOR LOOP - LOOP THROUGH ARRAY EXAMPLE //
/*
var students = ["john", "jack", "jared", "jill", "joyce"];
//get length of array
console.log(students.length); 

//for loop using .length for array
for(var i = 0; i < students.length; i++){
  console.log(students[i]);
}
*/


// FOR [OF] LOOP //
/*
//students array
var students = ["john", "jack", "jared", "jill", "joyce"];

for(var student of students){
  console.log(student);
  student++;
}
*/


// FOR [IN] LOOP EXAMPLE //
/*
//cat object
var myCat = { name: "Garfield", age: 46, hungry: true};

for( var i in myCat){
  console.log(myCat[i]);
  i++;
}
*/


// WHILE LOOP EXAMPLES //
 /*
// count down from 10 to 0
var c = 10;
while( c >= 0 ){
  console.log(c);
  c--;
}

//counting up in multiples of 5, 10 times
var counter = 1;
var result;
while( counter <= 10){
  result = counter * 5;
  console.log(counter, "x 5 =", result);
  counter++;
}
*/


// DO WHILE LOOP EXAMPLES //
// count up 0 to 10
/*
var d = 0;
do {
  console.log(d);
  d++;
} while( d <= 10);

// do while with no counter with false condition
var hungry = false;
do{
  console.log("you are hungry, eventhough hungry is false!");
} while( hungry == true);
*/


// ELSE IF EXAMPLE //
/*
var score = 40;
if(score > 85){
  console.log("You aced");
} else if(score > 50){
  console.log("You passed");
} else{
  console.log("You failed");
}
*/


// TERNARY OPERATOR EXAMPLE //
/*
// regular if/else
function checkScore(score){
  if(score > 50){
    return "You passed";
  } else{
    return "You failed";
  }
}
console.log(checkScore(40));
// ternary
function checkTernScore(score){
  return score > 50 ? "You passed" : "You failed"; 
}

console.log(checkTernScore(30));
*/