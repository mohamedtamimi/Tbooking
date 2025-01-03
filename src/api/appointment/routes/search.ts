module.exports = {
    routes: [
        { // Path defined with a URL parameter
            method: 'POST',
            path: '/booking',
            handler: 'appointment.booking',
            config:{
              auth:  false
            }
        },
        { // Path defined with a URL parameter
            method: 'GET',
            path: '/searchCU',
            handler: 'appointment.searchCU',
            config:{
              auth:  false
            }
        },
        
        { // Path defined with a URL parameter
            method: 'GET',
            path: '/searchOR',
            handler: 'appointment.searchOR',
            config:{
              auth:  false
            }
        },
        { // Path defined with a URL parameter
            method: 'GET',
            path: '/servicesMobile',
            handler: 'appointment.servicesMobile',
            config:{
              auth:  false
            }
        },
        { // Path defined with a URL parameter
            method: 'GET',
            path: '/usersMobile',
            handler: 'appointment.usersMobile',
            config:{
              auth:  false
            }
        },
        { // Path defined with a URL parameter
            method: 'GET',
            path: '/publishedPosts',
            handler: 'appointment.publishedPosts',
            config:{
              auth:  false
            }
        },
        { // Path defined with a URL parameter
            method: 'GET',
            path: '/getLastNumber',
            handler: 'appointment.getLastNumber',
            config:{
              auth:  false
            }
        },
        { // Path defined with a URL parameter
            method: 'GET',
            path: '/convertDraftToCancel',
            handler: 'appointment.convertDraftToCancel',
            config:{
              auth:  false
            }
        },
        { // Path defined with a URL parameter
          method: 'GET',
          path: '/deleteUnapproved',
          handler: 'appointment.deleteUnapproved',
          config:{
            auth:  false
          }
      },
      {
        "method": "GET",
        "path": "/sse",
        "handler": "appointment.sse",
        "config": {
          auth:  false,

          "policies": []
        }
      },
        {
  "method": "GET",
  "path": "/notfi",
  "handler": "appointment.notfi",
  "config": {
    auth:  false,
    "policies": []
  }
}
       
    ]
}