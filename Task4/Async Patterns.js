
// Callback Functions
// Generators
// Promises



/* ------------------------------ Bad Code  ------------------------------------*/

/*---------- CALLBACKS ----------*/

setTimeout(function () {
    console.log("First");
    setTimeout(function () {
        console.log("Two");
        setTimeout(function () {
            console.log("Three");
        }, 1000);
    }, 1000);
}, 1000);
