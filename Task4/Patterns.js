
/**
 *   @param       ARGUMENT_OBJECT
 *  Available in all functions
 *  Like an Array, but not really an arrray
 */
function toSum(a, b, c) {
    return a + b + c;
};

console.log(toSum(1, 2, 3));
console.log(toSum(1, 2, 3, 4));
console.log(toSum(1, 2));

/**
 *  @param SOLUTION
 */

function toSum(args) {
    var sum = 0;

    for (var index = 0; index < args.length; index++) {
        var sum = args[index];
    }
    return sum;
}




/**
 *   @param CHAINING
 */

var Calc = function (start) {
    this.add = function (x) {
        start = start + x;
        return this;
    };

    this.multiply = function (x) {
        start = start * x;
        return this;
    };

    this.equals = function () {
        print(start);
        return this;
    };
    print = function (res) {
        console.log("Result is " + res);
    }


};

new Calc(0)
    .add(1)
    .add(2)
    .multiply(3)
    .equals();

