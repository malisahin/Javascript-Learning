function Employee(name, age) {
    var _name = name;
    var _age = age;

    object.defineProperty(this, "age", {
        get: function () {
            return _age;
        },
        set: function (value) {
            if (value < 1 && value > 120)
                alert("Invalid age");
            else
                _age = value;
        }
    });
}


