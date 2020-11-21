const http = require("http");
const fs = require("fs");
const url = require("url");

http.createServer((req, res) => {
    let pathname = url.parse(req.url).pathname;

    console.log("request for " + pathname + " received");

    //파일이름이 비었다면 index,html로 성정
    if (pathname === "/") {
        pathname = "/index.html";
    }

    // 파일 읽기
    fs.readFile(pathname.substr(1), (err, data) => {
        if (err) {
            console.log(err);

            res.writeHead(404, { "Content-Type": "text/html" });
        } else {
            res.writeHead(200, { "Content-Type": "text/html" });

            res.write(data.toString());
        }
        res.end();
    });
}).listen(8081);

console.log("Server running at http://localhost:8081");
