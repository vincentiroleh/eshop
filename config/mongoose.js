const mongoose = require('mongoose');
const env = require('./env');

const options = { useUnifiedTopology: true, useNewUrlParser: true };

try {
    mongoose.connect(env.DB_URL, options)
    console.log('Database connection initiated')
} catch (error) {
    console.log('errorhere', error)
}

module.exports = mongoose;