const server = require('./lib/util/server');

server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url); //eslint-disable-line
});
