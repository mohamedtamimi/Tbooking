module.exports = {
    routes: [
        {
            method: 'PUT',
            path: '/discountQTY/:id',
            handler: 'qty.updateStock',
            config:{
              auth:  false,
              "policies": []
            }
        },
        { // Path defined with a URL parameter
            method: 'POST',
            path: '/applayCatProducts',
            handler: 'product.applayCatProducts',
            config:{
              auth:  false
            }
        },
        
    ]
}