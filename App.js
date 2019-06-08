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
    res.end('proposition: the gift of process. The entryway responds to the need to have a way of inviting people to cross the threshold into our space that conveys something of the ethos of the project, and familiarizes them with some of the activities under way. The usual method of crossing the threshold into a dedicated online space is individualizing and transactional: the person identifies themselves, often accepts formal conditions, and sometimes provides a fee or service in return for gaining entry. Our entryway smart contract, on the other hand, is designed to be relational, and to be part of a gift economy. The presence of the person entering is not immediately be registered in a way that is visible on the platform. They are invited basically to lurk: to look around and see what is going on, and then to “shadow” a part of the process that interests them. Whenever they are ready and feel they have a sense of the process and might have something to contribute, they give a gift to the process. This could be anything: a comment, a proposition, a concept, a poem, an image, a link, a file upload, etc. Once they have made the gift and it is registered by the system, their passage across the threshold is complete and their presence is made visible.');
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