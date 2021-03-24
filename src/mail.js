require('dotenv').config();
const mailer = require ('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;
const {Hello} = require("./hello_template.js");
const {Thanks} = require("./hello_template.js");
const getEmailData = (to, message, template)=> {
    let data = null;
    switch(template){
        case "hello":
                data = {
                    from: "newtonvithi@gmail.com",
                    to:"newtonvithi@gmail.com",
                    subject: `Please include to your world ${to}`,
                    html: Hello(message)
                }
                break;
        case "thanks":
            data = {
                from: "newtonvithi@gmail.com",
                to: "newtonvithi@gmail.com",
                subject: 'Portfolio Message',
                html: Thanks()
            }
            break;
        default:
            data;
    }
    return data;
}
const createTransporter = async() => {
    const oauth2Client = new OAuth2 (
        process.env.CLIENT_ID,
         process.env.CLIENT_SECRET,
         "https://developers.google.com/oauthplayground"
);

oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN
});
};

const accessToken = await new Promise((resolve, reject) => {
oauth2Client.getAccessToken((err, token) => {
    if(err) {
        reject("Failed to create access token:(");
    }
    resolve(token);
});
});

const sendEmail = async (to, message, type) => {
    console.log(to, message, type);
    let emailTransporter = await createTransporter();
    await emailTransporter.sendMail(to, message, type);
    const smtpTransport = mailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        pool: true,
        service: "gmail",
        auth: {
            type: "OAuth2",
            user: process.env.EMAIL,
            accessToken,
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            refreshToken: process.env.REFRESH_TOKEN
          },
        tls: {
            rejectUnauthorized: false
          }
    });
    const mail = getEmailData(to, message, type)

    console.log(mail);

    smtpTransport.sendMail(mail, function(error, response){
        if(error) {
            console.log(error);
        } else {
            console.log("email sent successfully")
        }
        smtpTransport.close();
    })

}

module.exports = {sendEmail};