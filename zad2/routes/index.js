const fs = require('fs');
const querystring = require('querystring');
const { renderPage: renderHomePage } = require('../views/home');
const { renderPage: renderAddCarPage } = require('../views/add-car');
const { renderPage: renderCarPage } = require('../views/car');

const handleHome = (res) => {
    res.setHeader("Content-type", "text/html");
    res.write(renderHomePage());
    res.end();
};

const handleAddCar = (method, req, res) => {
    if (method === 'GET') {
        res.setHeader("Content-type", "text/html");
        res.write(renderAddCarPage());
        res.end();
    } else if (method === 'POST') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        }).on('end', () => {
            const formData = querystring.parse(body);
            fs.writeFile('formData.json', JSON.stringify(formData), (err) => {
                res.writeHead(302, { 'Location': '/car' });
                res.end();
            });
        });
    }
};

const handleCar = (res) => {
    fs.readFile('formData.json', (err, data) => {
        res.setHeader("Content-type", "text/html");
        res.write(renderCarPage(data));
        res.end();
    });
};

const handlePageNotFound = (res) => {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write("404 Page Not Found");
    res.end();
};

module.exports = { handleHome, handleAddCar, handleCar, handlePageNotFound };
