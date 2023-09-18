abstract class Approver {
    protected successor: Approver | null = null;
    abstract approveRequest(amount: number): void;

    setSuccessor(successor: Approver): void {
        this.successor = successor;
    }
}

class Manager extends Approver {
    approveRequest(amount: number): void {
        if (amount <= 100) {
            console.log(`Менеджер одобрил документ на сумму ${amount}$.`);
        } else if (this.successor) {
            this.successor.approveRequest(amount);
        }
    }
}

class Director extends Approver {
    approveRequest(amount: number): void {
        if (amount <= 500) {
            console.log(`Директор одобрил документ на сумму ${amount}$.`);
        } else if (this.successor) {
            this.successor.approveRequest(amount);
        }
    }
}

class CEO extends Approver {
    approveRequest(amount: number): void {
        if (amount > 500 && amount < 5000) {
            console.log(`Генеральный директор одобрил документ на сумму ${amount}$.`);
        } else {
            console.log("Документ не может быть одобрен.");
        }
    }
}

const manager = new Manager();
const director = new Director();
const ceo = new CEO();

manager.setSuccessor(director);
director.setSuccessor(ceo);

manager.approveRequest(50);
manager.approveRequest(300);
manager.approveRequest(4000);
manager.approveRequest(8000);
