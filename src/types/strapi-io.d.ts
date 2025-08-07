import type { Server as IOServer } from 'socket.io';

declare module '@strapi/strapi' {
  interface Strapi {
    io?: IOServer;
  }
}