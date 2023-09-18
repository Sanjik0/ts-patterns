interface Image {
    display(): void;
}

class RealImage implements Image {
    private filename: string;

    constructor(filename: string) {
        this.filename = filename;
        this.loadImageFromDisk();
    }

    private loadImageFromDisk() {
        console.log(`Картинка загружается: ${this.filename}`);
    }

    display() {
        console.log(`Картинка отображается: ${this.filename}`);
    }
}

class ImageProxy implements Image {
    private realImage: RealImage | null = null;
    private filename: string;

    constructor(filename: string) {
        this.filename = filename;
    }

    display() {
        if (!this.realImage) {
            this.realImage = new RealImage(this.filename);
        }
        this.realImage.display();
    }
}

const image1: Image = new ImageProxy("image1.jpg");
const image2: Image = new ImageProxy("image2.jpg");

image1.display();
image1.display();
image2.display();
