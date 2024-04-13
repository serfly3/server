const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });
    res.end('<h1>Скоро тут будет сервис рейтинга</h1>', 'utf8');
});

server.listen(3000); 