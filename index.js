console.log("Working");

console.log("---------Question 1-------------");

function check(){
    console.log("Hello!! I am check function");
}
check();

console.log("---------Question 2-------------");

function sum(a,b){
    let c = a+b;
    console.log(c); 
}

sum(3,4);

console.log("---------Question 3-------------");

const arrowFunction = (age) =>{
    console.log(age);
}
arrowFunction("My age is 26");

console.log("---------Question 4-------------");

var x = 21;
var girl1 = function () {
    console.log(x);
    var x = 20;
};
girl1 ();

// OUTPUT ---------- Undefined

console.log("---------Question 5-------------");

var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};

// OUTPUT ---------- Undefined



console.log("---------Question 7-------------");

function factorial(a){
    let fact=1;
    if(a==0){
        console.log("0")
    }
    else if(a==1){
        console.log("1")
    }
    else{
        for(i = a; i>=1; i--){
            fact = fact*i;
            console.log(fact);
        }
    }
}
factorial(10);

console.log("---------Question 6-------------");

var x = 21;
a();
b();
console.log(a);
a = function() {
    
   x = 20;
  console.log(x);
};
b = function() {
    
    x = 40;
   console.log(x);
};

// Output ------- Uncaught ReferenceError: a is not defined
