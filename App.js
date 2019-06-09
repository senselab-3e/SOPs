const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  //res.end('Hello World\n');
  switch(req.url){
    case "/":
    res.end('Hello World\n');
    break;
    case "/entryway":
    res.end('proposition: the gift of process. The entryway responds to the need to have a way of inviting people ');
    break;
    case "/welcomewagon":
    res.end('entryway');
    break;
    case "/catherder":
    res.end('catherder');
    break;
    case "/creativecutcall":
    res.end('creativecutcall');
    break;
    case "/catherder":
    res.end('catherder');
    break;
    case "/regroup":
    res.end('catherder');
    break;
    case "/godessofanarchy":
    res.end('godessofanarchy');
    break;
    case "/monetizer":
    res.end('monetizer');
    break;
    //Turnstile
    //Lucre

    default:
    res.end("Unknown Path");
  }

  // if (req.url == "/") {
  //   res.end('Hello World\n');
  // } else if (req.url == "/urls") {
  //   res.end("www.senselab.ca\nwww.inflexions.org");
  // } else {
  //   res.statusCode = 404;
  //   res.end("Unknown Path");
  // }


});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});