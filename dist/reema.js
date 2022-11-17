"use strict";
const fastify = require('fastify')();
fastify.get('/', (request, reply) => {
    reply.send({ hello: 'world' });
});
fastify.listen(3000, (err) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
});
