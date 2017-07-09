//https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var-to-declare-a-variable


function Person(first, last, age, gender) {
    this.name = {
        first,
        last
    };
    this.age = age;
    this.gender = gender;
    this.greeting = function () {
        console.log('Hi! I\'m ' + this.name.first + '.');
    };
}


function Car(brand, hp, km, age, maxSpeed) {
    this.brand = brand;
    this.hp = hp;
    this.km = km;
    this.age = age;
    this.maxSpeed = maxSpeed;
    this.bio = function () {
        console.log("Brand: " + this.brand + " HorsePower: " + this.hp + " KM: " + this.km + " Age: " + this.age + " Max Speed: " + this.maxSpeed);
    }
}

var firat = new Person("Fırat", "Kocaman", "25", "Erkek");

var firatsAraba = new Car("Chevrolet", "320hp", "20000", "2", "280");

firat.__proto__.car = firatsAraba;

