import mailer from 'nodemailer';
const {Hello} = require("./hello_template");
const {Thanks} = require("./thanks_template");
const getEmailData = (to, message, template)=> {
    let data = null;

    switch(template){
        case "hello":
                data = {
                    from: "Priya Rama <priyami2010@gmail.com>",
                    to,
                    subject: 'Portfolio Message',
                    html: Hello()
                }
                break;
        case "thanks":
            data = {
                from: "Priya Rama <priyami2010@gmail.com>",
                to,
                subject: 'Portfolio Message',
                html: Thanks()
            }
            break;
        default:
            data;
    }
    return data;
}
const sendEmail = (to, message, type) => {

    const smtpTransport = mailer.createTransport({
        service: "Gmail",
        auth: {
            user: "priyami2010@gmail.com",
            pass: "stow1986;"
        }
    })

    const mail = getEmailData(to, message, type)

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