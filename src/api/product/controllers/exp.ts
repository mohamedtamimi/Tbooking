module.exports = {
    async filterProducts(ctx) {

      try {
        const currentDate = new Date();
        const threeMonthsFromNow = new Date(currentDate);
        threeMonthsFromNow.setMonth(currentDate.getMonth() + 3);

      let products = await strapi.entityService.findMany('api::product.product', {
        populate: "*",
        filters: {
            dateExpire: { $eq: threeMonthsFromNow.toISOString().split('T')[0]},
           
        }
      });
      
  
        ctx.send(products);
      } catch (err) {
        ctx.send(err);
      }
    },
  };