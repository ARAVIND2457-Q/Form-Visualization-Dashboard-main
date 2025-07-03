const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: '../.env' });

const Connection = () => {
    const Username = process.env.MONGO_USER;
    const Password = process.env.MONGO_PASSWORD;

    const DB = `mongodb+srv://${Username}:${Password}@cluster0.lbysu1r.mongodb.net/?retryWrites=true&w=majority`

    mongoose.set('strictQuery', false);
    mongoose.connect(DB, { useNewUrlParser: true }).then(() => {
        console.log('Database is connected successfully');
    }).catch(error => {
        console.log(`error while connecting to the database = ${error}`);
    })
}

module.exports = Connection;