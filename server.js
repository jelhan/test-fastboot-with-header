const FastBootAppServer = require('fastboot-app-server');
const ExpressHTTPServer = require('fastboot-app-server/src/express-http-server');

const httpServer = new ExpressHTTPServer({
  port: 49742,
});
const app = httpServer.app;

app.use(function (req, res, next) {
  res.set('Content-Security-Policy', "default-src 'http://examples.com';");
  next();
});

let server = new FastBootAppServer({
 distPath: 'dist',
  httpServer: httpServer,
});

server.start();
