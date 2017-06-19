class Loops { };

Loops.prototype.while = function (number) {
    /*  The most basic loop in JavaScript is the while loop which would be discussed in this chapter. 
        The purpose of a while loop is to execute a statement or code block repeatedly as long as an expression is true. 
        Once the expression becomes false, the loop terminates. 
    */

    while (expression) {
        // Statement(s) to be executed if expression is true
    }
    var count = 0;
    while (count < number) {
        console.log("Current Count : " + count + "<br />");
        count++;
    }
}

Loops.prototype.doWhile = function (number) {
    do {
        //Statement(s) to be executed;
        // Because of do statement, this loop turn at least once.
    } while (expression);  // Don't miss semicolon !!

    var count = 0;
    do {
        console.log("Current Count : " + count + "<br />");
        count++;
    }
    while (count < number);
    console.log("Loop stopped!");

}

// Will be continued !!
