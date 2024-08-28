const mongoose = require('mongoose');
require('dotenv').config();
const dbUri = process.env.MONGODB_URI;

async function connectDB() {
    try {
        await mongoose.connect(dbUri);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
}

async function disconnectDB() {
    try {
        await mongoose.connection.close();
        console.log('Disconnected from MongoDB');
    } catch (error) {
        console.error('Error disconnecting from MongoDB:', error);
    }
}

async function findOneByName(name) {
    try {
        const collection = mongoose.connection.db.collection('tokens');
        const result = await collection.findOne({ name: name });
        return result;
    } catch (error) {
        console.error('Error finding document:', error);
        throw error;
    }
}

module.exports = { connectDB, disconnectDB, findOneByName };