const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const key = require('./routes/keys');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env'});

connectDB();

const app = express();

app.use(bodyParser.json());
// middlewares
app.use(logger);
app.use(errorHandler);
// end points
app.use('/key', key);

const PORT = process.env.PORT || 5001;

const server = app.listen(PORT, () => { 
    console.log(`Server is listening on PORT: ${PORT}`);
});

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);

    server.close(() => process.exit(1));
});