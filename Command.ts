interface Command {
    execute(): void;
}

class LightOnCommand implements Command {
    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    execute(): void {
        this.light.turnOn();
    }
}

class LightOffCommand implements Command {
    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    execute(): void {
        this.light.turnOff();
    }
}

class Light {
    turnOn(): void {
        console.log("Свет включен");
    }

    turnOff(): void {
        console.log("Свет выключен");
    }
}

class RemoteControl {
    private command: Command | null = null;

    setCommand(command: Command): void {
        this.command = command;
    }

    pressButton(): void {
        if (this.command) {
            this.command.execute();
        } else {
            console.log("Команда не установлена.");
        }
    }
}

const light = new Light();
const lightOnCommand = new LightOnCommand(light);
const lightOffCommand = new LightOffCommand(light);

const remoteControl = new RemoteControl();

remoteControl.setCommand(lightOnCommand);
remoteControl.pressButton();

remoteControl.setCommand(lightOffCommand);
remoteControl.pressButton();
