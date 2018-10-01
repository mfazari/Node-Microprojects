var http = require('http');
var fs = require('fs');
var counter = 0;

// write out numbers
function writeNumbers(res) {



  // increment global, write to client
  for (var i = 0; i<100; i++) {
    counter++;
    res.write(counter.toString() + '\n');
   }
}

// create http server
http.createServer(function (req, res) {

   var query = require('url').parse(req.url).query;
   app = require('querystring').parse(query).file + ".txt";

   // content header
   res.writeHead(200, {'Content-Type': 'text/plain'});

   // write out numbers
   writeNumbers(res);

   // timer to open file and read contents
   setTimeout(function() {

      console.log('opening ' + app);
      // open and read in file contents

fs.readFile(app, 'utf8', function(err, data) {
         if (err)
            res.write('Could not find or open file for reading\n');
         else {
            res.write(data);
         }
         // response is done
         res.end();
      });
   },2000);
}).listen(8124);


console.log('Server running at 8124');
/*



// load http module
var http = require('http');
var fs = require('fs');

// create http server
http.createServer(function (req, res) {

   // open and read in helloworld.js
   fs.readFile('helloworld.js', 'utf8', function(err, data) {

      res.writeHead(200, {'Content-Type': 'text/plain'});
      if (err)
         res.write('Could not find or open file for reading\n ');
      else

         // if no error, write JS file to client
         res.write(data);
      res.end();
     });
}).listen(8124, function() { console.log('bound to port 8124');});

console.log('Server running on 8124/');


/*


// load http module
var http = require('http');

// create http server
http.createServer(function (req, res) {

  // content header
  res.writeHead(200, {'content-type': 'text/plain'});

  // write message and signal communication is complete
  res.end("Hello, World!\n");
}).listen(8124);

console.log('Server running on 8124');

*/