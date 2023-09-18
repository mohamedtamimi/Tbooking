/**
 * appointment controller
 */
'use strict';
import { factories } from '@strapi/strapi'
const { createCoreController } = require('@strapi/strapi').factories;


module.exports = createCoreController('api::appointment.appointment', ({ strapi }) => ({
    async searchCU(ctx){
        try {
            const search = ctx.request.query;

            const entities = await strapi.entityService.findMany('api::appointment.appointment', {
                populate: '*',
                filters: {
                   customer: {
                        $or: [
                          {  firstName: { $containsi: search },},
                           { lastName: { $containsi: search }}
                        ]
                      }
                }
               
            });
            ctx.send({entities});
        } catch (error) {
            
        }
    }

}));