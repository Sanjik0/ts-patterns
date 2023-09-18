interface Product {
    getProduct(): void;   
}

interface ProductFactory {
    createProduct(): Product;
}

class Milk implements Product {
    getProduct(): void {
        console.log('Молоко готово')
    }
}

class Coffee implements Product {
    getProduct(): void {
        console.log('Кофе готово')
    }
}

class MilkFactory implements ProductFactory {
    createProduct(): Product {
        return new Milk();
    }
}

class CoffeeFactory implements ProductFactory {
    createProduct(): Product {
        return new Coffee();
    }
}

function main(factory: ProductFactory) {
    const transport = factory.createProduct();
    transport.getProduct();
}

main(new MilkFactory())
main(new CoffeeFactory())
