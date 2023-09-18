class BurgerOrder {
    private burgerType: string = "";
    private cheese: boolean = false;
    private lettuce: boolean = false;
    private tomato: boolean = false;
    private cutlet: boolean = false;

    constructor(burgerType: string) {
        this.burgerType = burgerType;
    }

    addCheese() {
        this.cheese = true;
        return this;
    }

    addLettuce() {
        this.lettuce = true;
        return this;
    }

    addTomato() {
        this.tomato = true;
        return this;
    }

    addСutlet() {
        this.cutlet = true;
        return this;
    }

    build() {
        return {
            burgerType: this.burgerType,
            cheese: this.cheese,
            lettuce: this.lettuce,
            tomato: this.tomato,
            cutlet: this.cutlet,
        };
    }
}

const order = new BurgerOrder("Cheese Burger Beef")
    .addCheese()
    .addLettuce()
    .addTomato()
    .addСutlet()
    .build()
    
console.log("Заказ на бургер:", order);
