const http = require('http');
const { getHTMLDocumentStart, getHTMLDocumentEnd } = require('./htmlGenerator');
const { getCars, getCarInformation, getCarAge } = require('./cars');

const PORT = 3000;

const server = http.createServer((req, res) => {
    const cars = getCars();
    console.log(cars);
    res.setHeader("Content-type", "text/html");
    res.write(getHTMLDocumentStart());
    res.write('<body>');
    res.write(`<p>${getCarInformation(1)}</p>`);
    res.write(`<p>${getCarAge(1)}</p>`);
    res.write('</body>');
    res.write(getHTMLDocumentEnd());
    res.end();
});

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}.`);
});
