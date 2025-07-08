module.exports = {
    routes: [
        { // Path defined with a URL parameter
            method: 'POST',
            path: '/ai-assistant',
            handler: 'ai.ask',
            config: {
                auth: false
            }
        },

    ]
}