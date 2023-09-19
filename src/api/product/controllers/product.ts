'use strict';
/**
 * product controller
 */
import { factories } from '@strapi/strapi'
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::product.product', ({ strapi }) => ({

    async updateStocks(ctx) {
        const qty= ctx.request.query;
        const id= ctx.request.parameter;

        try {
            const entities = await strapi.entityService.update('api::product.product',id, {
                data: {
                    stocks: qty,
                  },
            });
            ctx.send(entities)
        } catch (error) {

        }
    }

}));