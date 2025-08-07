const socketIO = require('socket.io');

module.exports = {
  register(/*{ strapi }*/) {},

  bootstrap({ strapi }) {
    const io = socketIO(strapi.server.httpServer, {
      cors: {
        origin: '*', // Adjust this to your web admin domain in production
        methods: ['GET', 'POST'],
      },
    });

    strapi.io = io; // Make io accessible in lifecycles

    io.on('connection', (socket) => {
      console.log('Web admin connected to socket:', socket.id);
    });
  },
};