
let cleanRoom = function () {
    return new Promise(function (resolve, reject) {
        resolve('Cleaned The room');
    });
};

let removeGarbage = function (message) {
    return new Promise(function (resolve, reject) {
        resolve(message + 'Remove Garbage');
    });
};

let winIcecream = function (message) {
    return new Promise(function (resolve, reject) {
        resolve(message + 'won IceCream');
    });
};


cleanRoom().then(function (result) {
    return removeGarbage(result);
}).then(function (result) {
    return winIcecream(result);
}).then(function (result) {
    console.log("Finished " + result );
}); 


//**   OR 

Promise.all([cleanRoom(), removeGarbage(), winIcecream()]).then(function(){
    console.log("All functions are finished .");
});


