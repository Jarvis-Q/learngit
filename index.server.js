var PORT = 80;
var http = require('http');
var url = require('url');
var fs = require('fs');
var mime = require('./mime').types;
var path = require('path');

var server = http.createServer(function(request, response) {
    var pathname = url.parse(request.url).pathname;
    if (pathname === '/') {
        pathname = 'index.html';
    }
    var realPath = path.join("web", pathname);
    var ext = path.extname(realPath);
    ext = ext ? ext.slice(1) : 'unknown';
    fs.exists(realPath, function(exists) {
        if (!exists) {
            response.writeHead(404, {
                'Content-Type': 'text/plain'
            });

            response.write("你想访问 " + pathname + " 先给点开发费用!");
            response.end();
        } else {
            console.log(pathname);
            fs.readFile(realPath, "binary", function(err, file) {
                if (err) {
                    response.writeHead(500, {
                        'Content-Type': 'text/plain'
                    });
                    response.end(err);
                } else {
                    var contentType = mime[ext] || "text/plain";
                    response.writeHead(200, {
                        'Content-Type': contentType
                    });
                    response.write(file, "binary");
                    response.end();
                }
            });
        }
    });
});
server.listen(PORT);
console.log("Server runing at port: " + PORT + ".");