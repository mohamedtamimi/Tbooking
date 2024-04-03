module.exports = {
    routes: [
        {
            method: 'PATCH',
            path: '/discountQTY/:id',
            handler: 'qty.updateStock',
            config:{
              auth:  false,
              "policies": []
            }
        },
        
    ]
}