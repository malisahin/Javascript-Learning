
// Callback Functions
// Generators
// Promises


/*-------------------------- CALLBACKS --------------------------*/

/* --------------- Bad Code  -----------*/

setTimeout(function () {
    console.log("First");
    setTimeout(function () {
        console.log("Two");
        setTimeout(function () {
            console.log("Three");
        }, 1000);
    }, 1000);
}, 1000);


/* --------------- Good Code  -----------*/

function one(cb) {
    console.log("One");
    setTimeout(cb, 1000);
} 
function two(cb) {
    console.log("Two");
    setTimeout(cb, 1000);
} 

function Three(cb) {
    console.log("Three");
    setTimeout(cb, 1000);
} 

one(function() {
    two(three);
});


