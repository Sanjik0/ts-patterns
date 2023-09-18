class DataBaseConnection {
    private static instance: DataBaseConnection;
    private constructor() { }

    public static connect(url: string): DataBaseConnection {
        if (!DataBaseConnection.instance) {
            DataBaseConnection.instance = new DataBaseConnection();
            DataBaseConnection.dispayConnected(url);
        }

        return DataBaseConnection.instance;
    }

    private static dispayConnected(url: string) {
        console.log(`Подключено к ${url}!`);
    }
}

const connection = DataBaseConnection.connect('Mongo DB');
const connection2 = DataBaseConnection.connect('Mongo DB');
const connection3 = DataBaseConnection.connect('Mongo DB');
const connection4 = DataBaseConnection.connect('Mongo DB');