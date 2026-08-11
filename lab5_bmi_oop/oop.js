class Car {
    constructor(band, color) {
        this.mybandofcar = band;
        this.mycolorofcar = color;
    }

    get color() {
        return this.mycolorofcar;
    }

    drive() {
        return "I am driving";
    }

    swim() {
        console.log("I am swimming");
    }

    get band() {
        return this.mybandofcar;
    }
}

const car1 = new Car("BMW", "Black");
const car2 = new Car("COCO", "Green");

console.log(car1.band);
console.log(car2.mybandofcar);

console.log(car1.drive());
car2.swim();