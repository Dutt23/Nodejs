// Importing http package
var http = require("http");

//Importing our date file. ./ <-- means in same folder
var date = require("./date_module");
// Importing url package
var url = require("url");

var adr = 'http://localhost:8080/?year=2017&month=July&month=June';

http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    // res.write("Hello World" + date.myDateTime());
    var query = url.parse(adr, true);
    //Host returns the host , search returns the object which has to be parsed for further use
    //The second query is the function the first is the variable
    var txt = query.host +"pathname" +query.pathname + query.search + "\n These are the months parsed"+query.query.month;
    res.end(txt);
  })
  .listen(8080);
