const sgMail = require('@sendgrid/mail')



sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const msg = {
    to: 'pratikmundokar14@gmail.com',
    from: 'pratikmundokar14@rediffmail.com',
    subject: 'My first mail from node',
    text: "I'm sending myself an email"
}

sgMail.send(msg).then(() => {
    console.log('Message sent')
}).catch((error) => {
    console.log(error.response.body)
        // console.log(error.response.body.errors[0].message)
})