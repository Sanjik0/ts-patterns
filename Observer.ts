interface Observer {
    update(message: string): void;
}

class Follower implements Observer {
    private username: string;

    constructor(username: string) {
        this.username = username;
    }

    update(message: string) {
        console.log(`${this.username} пришло новое сообщение: "${message}"`);
    }
}

interface Subject {
    addObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyFollowers(message: string): void;
}

class SocialMedia implements Subject {
    private followers: Observer[] = [];

    addObserver(observer: Observer) {
        this.followers.push(observer);
    }

    removeObserver(observer: Observer) {
        const index = this.followers.indexOf(observer);
        if (index !== -1) {
            this.followers.splice(index, 1);
        }
    }

    notifyFollowers(message: string) {
        for (const follower of this.followers) {
            follower.update(message);
        }
    }

    postMessage(message: string) {
        console.log(`Опубликовал новое сообщение: "${message}"`);
        this.notifyFollowers(message);
    }
}

const socialMedia = new SocialMedia();

const follower1 = new Follower("User1");
const follower2 = new Follower("User2");
const follower3 = new Follower("User3");
const follower4 = new Follower("User4");
const follower5 = new Follower("User5");
const follower6 = new Follower("User6");

const users = ['User 1', 'User 2', 'User 3', 'User 4', 'User 5', 'User 6', 'User 7'];

for (const user of users) {
    socialMedia.addObserver(new Follower(user));
} 

socialMedia.postMessage("Привет всем!");
socialMedia.postMessage("Как у вас дела?");
