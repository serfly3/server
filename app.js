const http = require('http')

const server = http.createServer((req, res) => {
    const url = req.url;
    
    switch (url) {
        case "/":
            res.end(200, "Спасибо за запрос, скоро придумаю, что тебе ответить")
            break;
        case "/game":
            res.end(200, "Спасибо за запрос, скоро придумаю, что тебе ответить")
            break;
        case "/vote":
            if (req.method !== 'GEt') {
                res.end(405, "Запрещённый метод запроса")
            } 
            res.end(200, "Спасибо за запрос, скоро придумаю, что тебе ответить")
            
            break;
        default:
            res.end(404, "Not Found")
    }
});

server.listen(3005);