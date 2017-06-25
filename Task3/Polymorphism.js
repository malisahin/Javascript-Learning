function display(message) {
    console.log(message);
}

/*--------------------------------------------------
                    Shape
---------------------------------------------------- */   
var Shape = function () {
    var type = "";
}
Shape.prototype.draw = function () {
    return "I am a generic shape";
}

/*--------------------------------------------------
                    Circle
---------------------------------------------------- */   
var Circle = function () {
    Circle.prototype = Object.create(Shape.prototype);
}
Circle.prototype.type = "Circle"
Circle.prototype.draw = function () {
    return "I am a " + this.type;
}

/*--------------------------------------------------
                    Square
---------------------------------------------------- */   
var Square = function () {
    Square.prototype = Object.create(Shape.prototype);
}
Square.prototype.type = "Square";
Square.prototype.draw = function () {
    return "I am a " + this.type;
}

/*--------------------------------------------------
                    Triangle
---------------------------------------------------- */   
var Triangle = function () {
    Triangle.prototype = Object.create(Shape.prototype);
}
Triangle.prototype.type = "Triangle"
Triangle.prototype.draw = function () {
    return "I am a " + this.type;
}

/*--------------------------------------------------
                    Objects
---------------------------------------------------- */   

var triangle  = new Triangle();
display(triangle.draw());

var circle = new Circle();
display(circle.draw());

var square = new Square();
display(square.draw());


