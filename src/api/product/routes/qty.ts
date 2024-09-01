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
        
    ]
}