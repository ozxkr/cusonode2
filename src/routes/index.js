
// var querystring = require(querystring);
const { countries, languages } = require('countries-list');

// importamos  el modulo dandole el path del modulo que deseamos importar
const log = require('../modules/my-log');
// importacion parcial

const routes = app => {
  app.get('/', (request, response) => {
    // response.sendFile('src/tabla.html');
    response.status(200).sendFile('tabla.html', { root: 'src/public' });
  });

  app.get('/info', (request, response) => {
    // response.sendFile('src/tabla.html');
    log.info('gola');
    response.status(200).send('hola info');
  });

  app.get('/not', (request, response) => {
    // yresponse.sendFile('src/tabla.html');
    log.info('gola');
    response.status(200).send('hola info');
  });
  app.get('/prueba', (request, response) => {
    // response.sendFile('src/tabla.html');
    // response.status(404).send("NOT FOUND");
    response.status(200).sendFile('prueba4.html', { root: 'src/public' });
  });

  app.get('/prueba2', (request, response) => {
    // response.sendFile('src/tabla.html');
    // response.status(404).send("NOT FOUND");
    response
      .status(200)
      .sendFile('pruebanueva.html', { root: 'src/public/html' });
  });

  app.get('/carpeta', (request, response) => {
    // response.sendFile('src/tabla.html');
    // response.status(404).send("NOT FOUND");
    response.status(200).sendFile('carpeta.html', { root: 'src/public/html' });
  });

  app.get('/country', (request, response) => {
    console.log('request', request.query);
    response.json(countries[request.query.code]);
  });
  app.get('/languages/:lang', (request, response) => {
    console.log('request.params', request.params);
    const lang = languages[request.params.lang];
    console.log(request.params.lang);
    if (lang) {
      response.json({
        status: 'OK',
        data: lang
      });
    } else {
      response.status(404).json({
        status: 'NOT FOUND',
        // eslint-disable-next-line no-useless-concat
        message: `${'lenguaje' + ' '}${request.params.lang}`
      });
    }
  });

  app.get('*', (request, response) => {
    // response.sendFile('src/tabla.html');
    // response.status(404).send("NOT FOUND");
    response.status(404).sendFile('notfound.html', { root: 'src/public' });
  });
};

module.exports = routes;
