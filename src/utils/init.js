const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("data.json");
const middlewares = jsonServer.defaults();
const port = Number(process.env.PORT || 9000);
server.use(middlewares);
server.use(router);
server.listen(port, function () {
  console.log(`JSON server is running on port ${port} `);
});
