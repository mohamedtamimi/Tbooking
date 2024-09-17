/**
 * appointment controller
 */
'use strict';
import { factories } from '@strapi/strapi'
const { createCoreController } = require('@strapi/strapi').factories;


module.exports = createCoreController('api::appointment.appointment', ({ strapi }) => ({
    async searchCU(ctx) {
        try {
            const search = ctx.request.query;

            const entities = await strapi.entityService.findMany('api::appointment.appointment', {
                populate: '*',

            },);
            let customer =entities.filter(x=>x.customer?.firstName ==search.search|| x.customer?.middleName ==search.search||x.customer?.lastName==search.search);    

            ctx.send( {customer} );
        } catch (error) {
ctx.throw(error)
        }
    },
    async searchOR(ctx) {
        try {
            const search = ctx.request.query;

            const entities = await strapi.entityService.findMany('api::order.order', {
                populate: '*',

            },);
            // let customer
            // entities.map(x=>{
            //     customer  =x.appointment.find(x=>x.customer.firstName ==search.search|| x.customer.middleName ==search.search||x.customer.lastName==search.search);
            // })
            let customer =entities.filter(x=>x.appointment?.customer?.firstName ==search.search|| x.appointment?.customer?.middleName ==search.search||x.appointment?.customer?.lastName==search.search);    
            ctx.send( {customer} );
        } catch (error) {
ctx.throw(error)
        }
    },
    async booking(ctx) {
        const { firstName, middleName, lastName, phone, fromDate, toDate, address, number, employee } = ctx.request.body;
        const lastEntry = await strapi.db.query('api::appointment.appointment').findMany({
            orderBy: { createdAt: 'desc' },
            limit: 1,
        });

        // Extract the ID of the last created entry
        const lastCreatedId = lastEntry[0]?.number;
        let parts = lastCreatedId.split('-');
        let lastPart = parseInt(parts[parts.length - 1], 10) + 1;
        let incrementedLastPart = lastPart.toString().padStart(2, '0');
        parts[parts.length - 1] = incrementedLastPart;
        let incrementedNumberString = parts.join('-');
        try {
            const createAppo = await strapi.entityService.create('api::appointment.appointment', {
                data: {

                    employee: [employee],
                    customer: {
                        firstName,
                        middleName,
                        lastName
                    }, 
                    phone, fromDate, address, createBy: 'Mobile User',
                    number: incrementedNumberString,
                    toDate, approved: false, deposit: 0,
                    hide: false,
                }
            });
            ctx.send({ message: 'Booking Created', createAppo, incrementedNumberString });
        } catch (error) {
            return ctx.throw(400, error);


        }
    },
    async servicesMobile(ctx) {
        try {
            const entities = await strapi.entityService.findMany('api::service.service');
            ctx.send(entities);
        } catch (error) {
            ctx.send({ message: error, error });

        }
    },
    async usersMobile(ctx) {
        try {
            const entities = await strapi.entityService.findMany('plugin::users-permissions.user', {
                populate: { someRelation: true },
                filters: {
                    blocked: { $eq: false },
                    isToday: { $eq: true },
                    hide: { $eq: false }
                }
            });
            ctx.send(entities);
        } catch (error) {
            ctx.send({ message: error, error });

        }
    },
    async publishedPosts(ctx) {
        try {

            const publishedPosts = await strapi.entityService.findMany('api::mobile-ad.mobile-ad', {
                populate: 'ads',
                filters: {
                    published: { $eq: true },
                },
                sort: { createdAt: 'desc' },

            });



            ctx.send({ publishedPosts });
        } catch (error) {
            console.error(error);
            return ctx.throw(500, 'Internal Server Error');
        }
    },
    async getLastCreatedId(ctx) {
        try {
            // Query the database to get the last created entry sorted by 'createdAt'
            const lastEntry = await strapi.db.query('api::your-collection.your-collection').findMany({
                orderBy: { createdAt: 'desc' },
                limit: 1,
            });

            // Extract the ID of the last created entry
            const lastCreatedId = lastEntry[0]?.id;

            // Return the ID in the response
            ctx.send({ lastCreatedId });
        } catch (error) {
            ctx.throw(500, 'Unable to fetch the last created ID');
        }
    },
    async notfi(ctx) {
        ctx.set('Content-Type', 'text/event-stream');
        ctx.set('Cache-Control', 'no-cache');
        ctx.set('Connection', 'keep-alive');
    
        // Send an initial event to the client
        ctx.res.write(`data: Connection established\n\n`);
    
        // Example: Send periodic updates every 5 seconds
        const intervalId = setInterval(() => {
          const message = { message: `Hello! Current time: ${new Date().toLocaleTimeString()}` };
          ctx.res.write(`data: ${JSON.stringify(message)}\n\n`);
        }, 5000);
    
        // Stop sending events when the connection is closed
        // ctx.req.on('close', () => {
        //   clearInterval(intervalId);
        //   ctx.res.end();
        // });
      },
      
}));