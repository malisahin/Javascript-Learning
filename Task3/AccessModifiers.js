function Employee(firstName, lastName) {

    // Private Field
    var privateFullName;

    // Public field
    this.firstName = firstName;
    this.lastName = lastName;

    // Private Function
    var privateGetFullName = function () {
        privateFullName = firstName + " " + lastName;
        return privateFullName;
    }

    //Privileged Function
    // with "this" keyword private function becomes public.
    this.privilegedGetFullName = function () {
        return privateGetFullName;
    }

    //Public Function
    Employee.prototype.publicGetFullName = function() {
        return this.privilegedGetFullName();
    }
}


