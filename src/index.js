// las dependencias por buenas practivas se definen como conts y no como var
//
const express = require('express');

const app = express();

app.use(express.static('src/public'));
const routes = require('./routes/index');
const { hola, chau } = require('./modules/parcial');
// dfdfddfdg
// var server = http.createServer(function(request, response) {
//   var parsed = url.parse(request.url);
//   console.log("parsed:", parsed);
//   var query = querystring.parse(parsed.query);
//   var pathname = parsed.pathname;
//   if (pathname === "/") {
//     response.writeHead(200, { "Content-Type": "text/html" });
//     response.write("<html><body><p>HELLO</p></body></html>");
//     response.end();
//   } else if (pathname === "/exit") {
//     response.writeHead(200, { "Content-Type": "text/html" });
//     response.write("<html><body><p>Bye</p></body></html>");
//     response.end();
//   } else if (pathname === "/info") {
//     var result = log.info(pathname);
//     response.writeHead(200, { "Content-Type": "text/html" });
//     response.write(result);
//     response.end();
//   } else if (pathname === "/error") {
//     var result = log.error(pathname);
//     response.writeHead(200, { "Content-Type": "text/html" });
//     response.write(result);
//     response.end();
//   } else if (pathname === "/country") {
//     response.writeHead(200, { "Content-Type": "application/json" });
//     response.write(JSON.stringify(countries[query.code]));
//     response.end();
//   } else {
//     response.writeHead(404, { "Content-Type": "text/html" });
//     response.write("<html><body><p>NOT  FOUND</p></body></html>");
//     response.end();
//   }
// });
// en que puerto se pone a escuchar
// usamos las importaciones parciales como funciones
hola();
chau();
routes(app);
app.listen(4000, () => {
  console.log('runnig en 4000');
});

// server.listen(4000);
