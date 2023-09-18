module.exports = {
    routes: [
        { // Path defined with a URL parameter
            method: 'GET',
            path: '/searchCustomers',
            handler: 'appointment.searchCU',
            config:{
              auth:  false
            }
        },
       
    ]
}