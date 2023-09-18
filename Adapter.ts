interface Transport {
    drive(): void;
}

class Airplane {
    fly() {
        console.log('Я летаю')
    }
}

class Car implements Transport {
    drive(): void {
        console.log('Я еду')
    }
}

class AirplaneAdapter implements Transport {
    private airplane: Airplane;

    constructor(airplane: Airplane) {
        this.airplane = airplane;
    }

    drive(): void {
        this.airplane.fly();
    }
}

// Обычная реализация
const car = new Car();
car.drive();

// Реализация через адаптер
const airplane = new Airplane();
const airplaneAdapter = new AirplaneAdapter(airplane);
airplaneAdapter.drive();