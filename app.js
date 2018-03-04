//Syntax Parsers: A code which translates our code
//Lexical Environment: A code which check for syntaxt and grammar and physical location of the code where it is written. Will help in defining scope chain
//Execution Context: A wrapper to manage the code that is running
//"NAME/VALUE" Pair: A Name which maps to a unique value.
//Object: A collection of name value pairs.
//Golbal Environment and Global Object: The base execution context is known as Gobal Execution context, It creates a Global object, and a keyword 'this'  
//There will always a global object when we execute a JS code, in case of browser Window is global object, 'this' reffers to Window in browser. it may be different if you are executing in NodeJS

// These two objects a (a variable) and b (a function) which are not inside any function and directly executing under global Execution context.

//Very Important Phenomenon Called Hoisting, A variable or a function can be called before its definiton or declaration, still you won't get any error. 
//During creation of Execution context the JS engine keep memory space for variables and function it encounters during parsing. 

//Hoisting Example
/* 
b();

console.log(a);

var a = "Hello World";

function b() {    
    console.log('Called b!');
}

*/


//Understanding  Undefined and not defined 
/* 


Example: Not defined

console.log(a);

Example Undefined

var a;

console.log(a)

Example2 Undefined 

var a;

if(a === undefined){
    console.log('a is undefined!');
}
else{
    console.log('a is defined!');         
}

Good Practise: Never set yourself a variable to undefined,  as doing so you will never know which variable you missed and which you set as undefined. 

*/

//Javascript is Single Threaded and Synchronus Execution

// Function Invocation 
//Every Function Call will create its own Execution Context and put itself into Execution context stack, over one another. in the stack the last will be the Global execution context. 
/*
function b() {
    console.log('b');
}

function a() {
    b();
    console.log('a')
}

a();

output:
b
a

*/

// Variable environments, Execution context, Scope chain
/*
function b() {
    var myVar;
    console.log(myVar);
}

function a() {
    var myVar = 2;
    console.log(myVar)
    b();
}

var myVar = 1;
console.log(myVar);
a();

//Output: 
// 1
// 2
//undefined
*/

//Asynchronus Execution
//As mentioned javascript is Synchronus in nature, but to handle asynchronus functions, javascript also creates a event queue, in which the browser adds the event which occurs on the page like click or change, once the execution stack of JS completed, JS engine looks into event queue, if any function is subscribed for any event it will be placed in execution stack.  Remember all the events execution will happen only after JS execution stack is empty. 
