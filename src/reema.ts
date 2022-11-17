

const fastify = require('fastify')()
fastify.get('/', (request: any, reply: { send: (arg0: { hello: string }) => void }) => {  
  reply.send({ hello: 'world' })})
fastify.listen(3000, (err: any) => {  if (err) {    fastify.log.error(err)   
  process.exit(1)  } 
   fastify.log.info
   (`server listening on ${fastify.server.address().port}`  )})
