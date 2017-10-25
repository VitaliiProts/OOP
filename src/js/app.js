var dog = {
    legs: 4,
    name: "Shark",
    isAwesome: true
};

dog.age = 3;

dog.bark = function () {
    console.log("Гав-гав! Меня зовут " + this.name + "!");
};

dog.bark();

var speak = function () {
    console.log(this.sound + "! Меня зовут " + this.name + "!");
};

var pig = {
    sound: "Хрю-хрю",
    legs: 4,
    name: "Pig",
    speak: speak
};

var cat = {
    sound: "М'яу",
    name: "Barsik",
    speak: speak
};

cat.speak();
pig.speak();


// Создание объектов с помощью конструкторов
var Car = function (x, y) {
    this.x = x;
    this.y = y;
};

//Рисуем машины
var drawCar = function (car) {
    var carHtml = '<img src="http://www.pngpix.com/wp-content/uploads/2016/06/PNGPIX-COM-Aston-Martin-Vantage-GT4-White-Car-PNG-Image-500x179.png">';

    var carElement = $(carHtml);

    carElement.css({
        position: "absolute",
        left: car.x,
        top: car.y
    });

    $("body").append(carElement);
};

// var tesla = new Car(10, 20);
// var nissan = new Car(140, 240);
// drawCar(tesla);
// drawCar(nissan);

/*------------------------------------------
    Настройка объектов через прототипы
-------------------------------------------*/

Car.prototype.draw = function () {
    var carHtml = '<img src="http://www.pngpix.com/wp-content/uploads/2016/06/PNGPIX-COM-Aston-Martin-Vantage-GT4-White-Car-PNG-Image-500x179.png">';
    this.carElement = $(carHtml);
    this.carElement.css({
        position: "absolute",
        left: this.x,
        top: this.y
    });

    $("body").append(this.carElement);
};

Car.prototype.moveRight = function () {

    this.carElement.css({
        left: this.x,
        top: this.y
    });

    this.x += 5;
};

var tesla = new Car(20, 20);
var nissan = new Car(100, 200);
tesla.draw();
nissan.draw();

var moveCar = function () {
    $(tesla.moveRight());
};

setInterval(moveCar, 20);
