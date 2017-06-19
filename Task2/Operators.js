class Operators { }

/*-----------------------------------------------------------------------------
                       Arithmetic Operators
-----------------------------------------------------------------------------*/
Operators.prototype.addition = function (x, y) {
    var z = x + y;
    console.log("Addition of this 2 number is " + z);

}

Operators.prototype.subtraction = function (x, y) {
    var z;
    z = x > y ? x - y : y - x;
    console.log("Subtraction of this 2 number is" + z);
}

Operators.prototype.multiplication = function (x, y) {
    var z = x * y;
    console.log("Multiplication of this 2 number is " + z);
}

Operators.prototype.division = function (x, y) {
    var z = x > y ? x / y : y / x;
    console.log("Division of this 2 number is " + z);
}

Operators.prototype.modulus = function (x, y) {
    var z = x > y ? x % y : y % x;
    console.log("Modulus of this 2 number is " + z);
}

Operators.prototype.increment = function (x) {
    x = x++;
    console.log("Increment of x value by one" + x);
}

Operators.prototype.decrement = function (y) {
    x = x--;
    console.log("Decrement of x value by one" + x);
}

/*-----------------------------------------------------------------------------
                        Comparison Operators
-----------------------------------------------------------------------------*/

Operators.prototype.equal = function (x, y) {
    console.log("  == (Equal)  Checks if the value of two operands are equal or not, if yes, then the condition becomes true");
    var z = x == y ? true : false;
    console.log(" Equality of X and Y is  " + z);
}


Operators.prototype.notEqual = function (x, y) {
    console.log("!= (Not Equal)  Checks if the value of two operands are equal or not, if the values are not equal, then the condition becomes true.");
    var z = x == y ? false : true;
    console.log("Not equality of X and Y is  " + z);
}


Operators.prototype.greaterThan = function (x, y) {
    console.log("> (Greater than)Checks if the value of the left operand is greater than the value of the right operand, if yes, then the condition becomes true.");
    var mes = x > y ? " X greater than Y so Result is True" : " X is not Greater than Y so Result is False";
    console.log(mes);
}


Operators.prototype.lessThan = function (x, y) {
    console.log("< (Less than)  Checks if the value of the left operand is less than the value of the right operand, if yes, then the condition becomes true.");
    var mes = x < y ? " X less than Y so Result is True" : " X is not less than Y so Result is False";
    console.log(mes);
}

Operators.prototype.greaterOrEqual = function (x, y) {
    console.log(">= (Greater than or Equal to)  Checks if the value of the left operand is greater than or equal to the value of the right operand, if yes, then the condition becomes true.");
    var mes = x >= y ? " X greater than or equal to Y so Result is True" : " X is not greater than or equal to Y so Result is False";
    console.log(mes);
}

Operators.prototype.lessOrEqual = function (x, y) {
    console.log("<= (Less than or Equal to) Checks if the value of the left operand is less than or equal to the value of the right operand, if yes, then the condition becomes true.");
    var mes = x <= y ? " X  is less than or equal to Y so Result is True" : " X is not less than or equal to Y so Result is False";
    console.log(mes);
}


/*-----------------------------------------------------------------------------
                        Logical Operators
-----------------------------------------------------------------------------*/

Operators.prototype.LogicalAnd = function (x, y) {
    console.log("&& (Logical AND)  If both the operands are non-zero(True), then the condition becomes true.");
    var z = x && y ? "Both X and Y is true So result is true" : " Less, One of X and Y are not true So result is False";
    console.log(mes);
}

Operators.prototype.LogicalOr = function (x, y) {
    console.log("|| (Logical OR)  If any of the two operands are non-zero, then the condition becomes true.");
    var z = x || y ? "One of X and Y is true So result is true" : " Both of X and Y are false So result is False";
    console.log(mes);
}

Operators.prototype.LogicalNot = function (x, y) {
    console.log(" !(statement) Reverses the logical state of its operand. If a condition is true, then the Logical NOT operator will make it false.");
    var mes = !(x == y) ? "X and Y are equal but logical-not reverses it. So result is FALSE" : "X and Y are notequal but logical-not reverses it. So result is TRUE";
    console.log(mes);
}


/*-----------------------------------------------------------------------------
                            Bitwise Operators
-----------------------------------------------------------------------------*/

Operators.prototype.bitwiseAnd = function () {
    console.log("& (Bitwise AND)  It performs a Boolean AND operation on each bit of its integer arguments.");
}

Operators.prototype.bitwiseOr = function () {
    console.log(" '|' (BitWise OR)  It performs a Boolean OR operation on each bit of its integer arguments.");
}

Operators.prototype.bitwiseXor = function () {
    console.log(" '^' (Bitwise XOR)  It performs a Boolean exclusive OR operation on each bit of its integer arguments. Exclusive OR means that either operand one is true or operand two is true, but not both.");
}

Operators.prototype.bitwiseNot = function () {
    console.log(" '~' (Bitwise Not)  It is a unary operator and operates by reversing all the bits in the operand.");
}

Operators.prototype.leftShift = function () {
    console.log(" '<<' (Left Shift)  It moves all the bits in its first operand to the left by the number of places specified in the second operand. New bits are filled with zeros.");
}

Operators.prototype.rightShift = function () {
    console.log(" '>>' (Right Shift)  Binary Right Shift Operator. The left operand’s value is moved right by the number of bits specified by the right operand.");
}

Operators.prototype.rightShiftWithZero = function () {
    console.log(" '>>>' (Right shift with Zero)  This operator is just like the >> operator, except that the bits shifted in on the left are always zero.");
}


/*-----------------------------------------------------------------------------
                            Assignment Operators
-----------------------------------------------------------------------------*/

Operators.prototype.assignment = function (x) {
    console.log("= (Simple Assignment ) Assigns values from the right side operand to the left side operand");
    var z = x;
    console.log(" by 'z = x', x value assigned to Z ==>", z);
}

Operators.prototype.addAndAssignment = function (x) {
    console.log("+= (Add and Assignment) It adds the right operand to the left operand and assigns the result to the left operand.");
    var z = 5;
    z += x;
    console.log(" by 'z += x', z value is 5 and   x value added to Z ==>", z);
}

Operators.prototype.subtractAndAssignment = function (x) {
    console.log("−= (Subtract and Assignment)  It subtracts the right operand from the left operand and assigns the result to the left operand.");
    var z = 20;
    z -= x;
    console.log(" by 'z -= x', z value is 20 and Z value is subtracted from X ==>", z);
}

Operators.prototype.multiplyAndAssignment = function (x) {
    console.log("*= (Multiply and Assignment) It multiplies the right operand with the left operand and assigns the result to the left operand.");
    var z = 2;
    z *= x;
    console.log(" by 'z *= x', Z value is multiplied by X  ==>", z);
}

Operators.prototype.divideAndAssignment = function (x) {
    console.log("/= (Divide and Assignment)  It divides the left operand with the right operand and assigns the result to the left operand.");
    var z = 100;
    z /= x;
    console.log(" by 'z /= x', Z is divided by X==>", z);
}

Operators.prototype.modulesAndAssignment = function (x) {
    console.log("%= (Modules and Assignment)  It takes modulus using two operands and assigns the result to the left operand.");
    var z = 100
    z %= x;
    console.log(" by 'z %= x', Z value is moduled by X ==>", z);
}
