//modules
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const helmet = require('helmet');
const PORT = process.env.PORT || 3001;
const path = require('path');

//middleware
app.use(express.json());
app.use(cors());
app.use(helmet());

//.env
require('dotenv').config();

//routes
require('./routes/home')(app);
require('./routes/register')(app);
require('./routes/login')(app);
require('./routes/verify')(app);
require('./routes/delete')(app);
require('./routes/add')(app);
require('./routes/edit')(app);
require('./routes/find')(app);
require('./routes/search')(app);

//listen method
app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});

//Connecting to the database
const uri = process.env.ATLAS_URI;
mongoose.Promise = global.Promise;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('error', function () {
    console.log('Connection to Mongo established.');
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

mongoose.connection.once('open', function () {
    console.log('Successfully connected to the database');
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
    });
}
