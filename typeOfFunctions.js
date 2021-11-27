// Tupe of Functions

// 1 Function statement
    
    // function defination
    // function sayHello () {
    //     console.log("hello");
    // }

    // function deceleration
    //sayHello();

     // Functions are first calss citizen
     // functions are treated as first class citizens

/*
     let fnContainer = function fn () {
         console.log("FnContainer");
     }

     fnContainer();
*/


// 2 IIFE - Immediately Invoked function experision
     /*
        (function fn () {
            console.log("I will call myself on my own");
        })();
     */
// 3 Arrow Functions
        // let fn = (num) => {
        //     return num * num;
        // }

        // let fn = num => num * num;

        // console.log(fn(2));

// 4 First class Citizens
        // functions are treated as variables
        // assignment  -> fn expression
        // variables are passed as a paramenters
        // function can return functions
        function sayHello (param) {
            console.log("Inside main function");
            param();

            return 2;
        }

        function smaller () {
            console.log("THsi is smaller function");
        }

        console.log(sayHello(smaller));

