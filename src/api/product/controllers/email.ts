module.exports={
    
    async sendEmail(ctx) {
        const {to,from,replyTo,subject,text} = ctx.request.body;
        try {
      const email=await strapi.plugins['email'].services.email.send({
            to,
            from,
            replyTo,
            subject,
            text,
          })
          ctx.send(email)
        } catch (error) {
            ctx.send(error)
        }
    }
}