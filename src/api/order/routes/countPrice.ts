module.exports = {
    routes: [
        { // Path defined with a URL parameter
            method: 'GET',
            path: '/count',
            handler: 'order.count',
            config:{
              auth:  false
            }
        },
        { // Path defined with a URL parameter
            method: 'GET',
            path: '/numbers',
            handler: 'order.phoneNumbers',
            config:{
              auth:  false
            }
        },
        { // Path defined with a URL parameter
            method: 'GET',
            path: '/searchCustomer',
            handler: 'order.searchs',
            config:{
              auth:  false
            }
        },
        
    ]
}
