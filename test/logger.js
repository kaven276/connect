var c = require("../index.js");
var app = c()
.use(c.favicon())
.use(c.logger())
.use(function(r, p, n) {
    p.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    p.end('ok');
}).listen(8001);

