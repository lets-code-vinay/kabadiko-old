const nodemailer = require('nodemailer');
// const config = require('../config/config')

const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth:{
        user: 'rentmecar7@gmail.com',
        password:'pbiipddspjvjscws',
    }
})
transport.verify().then((res) => console.log(res))

function sendMailtoUser(user, email, activationToken){
    transport : sendMailtoUser({
        from : "rentmecar7@gmail.com",
        to: email,
        subject: `Account activation link to activate Scrapiko`,
        html:` Click Following link to verify you account <b>scrapiko.com<b> localhost:2021/api/user/accountactivation/${activationToken}?user=${user} `,
    })
    .then((res) =>{
        console.log('email is ready', res)
    })
    .catch((error) =>{
        console.log('nodemail error', error.message)
    })
}

module.exports = {sendMailtoUser}