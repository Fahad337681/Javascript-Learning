// Q1..Objects

let student = {
  name: "Fahad",
  age: 20,
  city: "lahore"
};

console.log(student.name);

//Q2.Updating age
student.age=21
console.log(student.age);

//Arrays
let fruits=["Apple","mango","banana"]
console.log(fruits[2]);

fruits.push("Orange")
console.log(fruits);

fruits.shift()
console.log(fruits);
console.log(fruits.length);


//Functions

function greet(){
    console.log("Hello world");
}

greet()

function add(x,y){
    return x+y
}

console.log(add(5,6));


// function for even/odd
function isEven(x) {
  if (x % 2 === 0) {
    console.log("Even Number");
  } else {
    console.log("Odd Number");
  }
}

isEven(5);








