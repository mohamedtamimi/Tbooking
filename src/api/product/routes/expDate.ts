module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/filterProducts',
            handler: 'exp.filterProducts',
            config:{
              auth:  false,
              "policies": []
            }
        },
        
    ]
}