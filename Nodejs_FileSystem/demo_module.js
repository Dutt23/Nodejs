var http = require("http");
// File System import
var fs = require("fs");
// Reading a file
http
  .createServer(function(req, res) {
    // Read File function
    fs.readFile("demofile.html", function(err, data) {
      res.writeHeader(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  })
  .listen(8080);
// Writing into a file
  http
  .createServer(function(req, res) {
    
    fs.appendFile("demofile.txt","File Content", function(err) {
      res.writeHeader(200, { "Content-Type": "text/html" });
      if (err) throw err;
      console.log("Saved");
      res.end();
    });
  })
  .listen(8081);

  // Appending a file
  http
  .createServer(function(req, res) {
    
    fs.writeFile("demofile.txt","File Content New", function(err) {
      res.writeHeader(200, { "Content-Type": "text/html" });
      if (err) throw err;
      console.log("Rewritten");
      res.end();
    });
  })
  .listen(8082);

