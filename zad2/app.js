const http = require('http');
const { handleHome, handleAddCar, handleCar, handlePageNotFound } = require('./routes');

const PORT = 3000;

const server = http.createServer((req, res) => {
    // Rozróżniamy żądanie na podstawie metody i ścieżki
    switch (req.url) {
        case '/':
            if (req.method === 'GET') {
                handleHome(res);
            } else {
                handlePageNotFound(res);
            }
            break;
        case '/add-car':
            if (req.method === 'GET' || req.method === 'POST') {
                handleAddCar(req.method, req, res);
            } else {
                handlePageNotFound(res);
            }
            break;
        case '/car':
            if (req.method === 'GET') {
                handleCar(res);
            } else {
                handlePageNotFound(res);
            }
            break;
        default:
            handlePageNotFound(res);
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}.`);
});
