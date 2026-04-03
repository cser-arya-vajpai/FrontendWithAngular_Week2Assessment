//Declarations
var a;
let b;
const c = 30; //Const declarations must be initialized. So, const c; isn't allowed.

//Initialization
a=90;
b=89;

//Redeclaration
a=89;
b=18;

//Reinitialization
var a = 12;
//let b = 67; -> not allowed since 'let' can't be reinitialized.

//Declaration + Initialization
let v1 = 218;
const v2 = 909;
var v3 = "hgg";
var e;
console.log(a);
console.log(b);
console.log(c);
console.log(v1);
console.log(v2);
console.log(v3);
console.log(e);

//Window Object: in-built methods, functions etc are here. These objects represent browser's window.
console.log(window);  //global object in RTE

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Symbol(123) == Symbol(123));

//Functions in JS
// Basic syntax for fn declaration -> function f_name(parameter) { //statement }

//IMPLEMENTING ALL TYPES OF FUNCTIONS: 

//NAMED FUNCTIONS 
function greet(){
    return "hello";
}
console.log(greet());

//ANONYMOUS FUNCTION
const greet1 = function() {
    return "Hello";
}
console.log(greet1());

//FUNCTION EXPRESSION
const add = function(a,b){
    return a+b;
}
console.log(add(2,3));

const mul = function(a,b){
    return a*b;
}

const div = function(a,b){
    return a/b;
}

const sub = function(a,b){
    return a-b;
}

//HIGHER ORDER FUNCTION
const calc = function(a,b,op) {
    if(op=='+'){
        return add(a,b);
    }
    
    else if(op=='*'){
        return mul(a,b);
    }
    else if(op=='/'){
        return div(a,b);
    }
    else{
        return sub(a,b);
    }
    
}
console.log(calc(6,7,'*'));
console.log(calc(7,8,'-'));
console.log(calc(1,4,'+'));
console.log(calc(10,5,'/'));


//ARROW FUNCTION
let arrow = () => {
    return "hi";
}
console.log(arrow());

//NESTED FUNCTIONS 
//Closure object-> 

const outer = function() {
    let a = 100;
    return function inner() {
        console.log(a);
    }
}
let res = outer();
console.log(res);
console.log(outer());
console.log(outer()());  //to get the function inside it. This is called as FUNCTION CURRYING.

//IIFE FUNTION  #Global Variable Pollution
(function () {
    console.log("Hello Arya Queen");
})()


//Strings and its methods 
