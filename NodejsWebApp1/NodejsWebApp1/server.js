"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var port = process.env.port || 1337;
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World from Prema thisd is my first git experiment. Added after changing to V2. some more changes after commiting to the github\n');
}).listen(port);
//# sourceMappingURL=server.js.map