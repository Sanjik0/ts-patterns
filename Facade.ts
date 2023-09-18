class Light {
    turnOn() {
        console.log("Свет включен");
    }

    turnOff() {
        console.log("Свет выключен");
    }
}

class Heater {
    turnOn() {
        console.log("Обогреватель включен");
    }

    turnOff() {
        console.log("Обогреватель выключен");
    }
}

class Stereo {
    turnOn() {
        console.log("Проигрыватель включен");
    }

    turnOff() {
        console.log("Проигрыватель выключен");
    }
}

class HomeAutomationFacade {
    private light: Light = new Light();
    private heater: Heater = new Heater();
    private stereo: Stereo = new Stereo();

    homeComing() {
        console.log("Coming home...");
        this.light.turnOn();
        this.heater.turnOn();
        this.stereo.turnOn();
    }

    leavingHome() {
        console.log("Leaving home...");
        this.light.turnOff();
        this.heater.turnOff();
        this.stereo.turnOff();
    }
}

const homeAutomation = new HomeAutomationFacade();

homeAutomation.homeComing();
homeAutomation.leavingHome();
