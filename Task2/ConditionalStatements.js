class Conditions { };

Conditions.prototype.ifElse = function () {
    console.log("The if statement executes a statement if a specified condition is truthy. If the condition is false, another statement can be executed.");
    /*
       if (condition)
           statement1
       [else
           statement2]
    */
    if (x > 5) {
        /* do the right thing */
    } else if (x > 50) {
        /* do the right thing */
    } else {
        /* do the right thing */
    }
}


Conditions.prototype.ternaryOperator = function () {
    console.log("  The conditional (ternary) operator is the only JavaScript operator that takes three operands. This operator is frequently used as a shortcut for the if statement.");
    console.log("Syntax ==> condition ? expr1 : expr2 ");

    /* f condition is true, the operator returns the value of expr1; otherwise, it returns the value of expr2. 
     *   For example, to display a different message based on the value of the isMember variable, you could use this statement:
    */
    var elvisLives = Math.PI > 4 ? 'Yep' : 'Nope';
    console.log(elvisLives);
}

Conditions.prototype.switchCase = function (expr) {
    console.log("The switch statement evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case.");
    /*
    switch (expression) {
    case value1:
        //Statements executed when the result of expression matches value1
        [break;]
    case value2:
        //Statements executed when the result of expression matches value2
        [break;]
    ...
    case valueN:
        //Statements executed when the result of expression matches valueN
        [break;]
    default:
        //Statements executed when none of the values match the value of the expression
        [break;]
}
*/
    switch (expr) {
        case 'Oranges':  // if expr == 'Oranges'
            console.log('Oranges are $0.59 a pound.');
            break;
        case 'Apples':  // if expr == 'Apples'
            console.log('Apples are $0.32 a pound.');
            break;
        case 'Bananas':  // if expr == 'Bananas'
            console.log('Bananas are $0.48 a pound.');
            break;
        case 'Cherries':  // if expr == 'Cherries'
            console.log('Cherries are $3.00 a pound.');
            break;
        case 'Mangoes':   // if expr == 'Mangoes'
            // Do not do anything !!
        case 'Papayas':   // if expr == 'Papayas'
            console.log('Mangoes and papayas are $2.79 a pound.');
            break;
        default:   // Else 
            console.log('Sorry, we are out of ' + expr + '.');
    }

    console.log("Is there anything else you'd like?");

}
