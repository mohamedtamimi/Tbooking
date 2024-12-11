'use strict';
/**
 * product controller
 */
import { factories } from '@strapi/strapi'
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::product.product', ({ strapi }) => ({

    // async  applayCatProducts(ctx) {
    //     const selectedCat = ctx.request.body;
    //     try {
    //         const entities = await strapi.entityService.findMany('api::product.product', {
    //             populate: '*',
               
    //         },);
            
    //       entities.map(async element => {

    //         // console.log(element);
    //         // console.log(element.category=[]);
    //         console.log(element.category=[{...selectedCat}]);

    //         // let fin=element.category.push(selectedCat) 
    //         //  strapi.entityService.update('api::product.product',element.id,{
    //         //     data:{
    //         //         category:[]
    //         //     }
    //         // })
    //       });
    //       console.log(selectedCat);

    //         ctx.send({ selectedCat});
    //     } catch (error) {
    //         ctx.throw(error)
    //     }
    // },
    async applayCatProducts(ctx) {
        const selectedCat = ctx.request.body; // The category object to apply to all products
        try {
        // Fetch all products with the `category` field populated
       // Fetch all products with the `category` field populated
       const products = await strapi.entityService.findMany('api::product.product', {
        populate: ['category'],
      });

      for (const product of products) {
        // Ensure `category` is initialized as an array
        let currentCategories = product.category || []; // Initialize as an empty array if null or undefined

        // Check if `category` is an array
        if (!Array.isArray(currentCategories)) {
          currentCategories = [currentCategories]; // Convert to array if it's a single object
        }

        // Check for duplicates before pushing the new category
        const isDuplicate = currentCategories.some(
          (existingCat) => existingCat.category === selectedCat.category
        );

        if (!isDuplicate) {
          // Add the new category to the existing categories
          currentCategories.push(selectedCat);
        }

        // Update the product in the database
        await strapi.entityService.update('api::product.product', product.id, {
          data: {
            category: currentCategories,
          },
        });
      }
          ctx.send({ message: 'Categories applied to all products successfully!', selectedCat });
        } catch (error) {
          console.error('Error updating categories:', error);
          ctx.throw(500, 'Failed to apply categories to products');
        }
      }
      

}));