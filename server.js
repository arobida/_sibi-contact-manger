const { createServer } = require('http');
const express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const path = require('path');
const { Client } = require('pg');


const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 5000);

const app = express();
const dev = app.get('env') !== 'production';


const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
    user: 'dhdggbknkwmhba',
    host: 'ec2-54-83-59-144.compute-1.amazonaws.com',
    database: 'd6aljv0c03gp2r',
    password: '2c0bc4abef295ead10104407d9d3d26b9640a87167fcb7bdb60c3cd65264a39d',
    port: 5432,
});

client.connect();

client.query('SELECT * FROM contacts;', (err, res) => {
    if (err) throw err;
    for (let row of res.rows) {
        console.log(JSON.stringify(row));
    }
    client.end();
});


if (!dev) {
    app.disable('x-powered-by');
    app.use(compression());
    app.use(morgan('common'));

    app.use(express.static(path.resolve(__dirname, 'build')));

    app.use('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
    });
}

if (dev) {
    app.use(morgan('dev'));
}

const server = createServer(app);

server.listen(PORT, err => {
    if (err) throw err;
    console.log('Server Started!');
})
