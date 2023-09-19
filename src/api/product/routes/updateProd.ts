module.exports = {
    routes: [
        { // Path defined with a URL parameter
            method: 'PUT',
            path: '/updatet',
            handler: 'product.updateStocks',
            config:{
              auth:  false
            }
        },
        
    ]
}
