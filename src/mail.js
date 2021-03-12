const mailer = require ('nodemailer');
const {Hello} = require("./hello_template.js");
const {Thanks} = require("./hello_template.js");
const getEmailData = (to, message, template)=> {
    let data = null;
    switch(template){
        case "hello":
                data = {
                    from: `${to}`,
                    to:"priyami2010@gmail.com",
                    subject: `Please include to your world ${to}`,
                    html: Hello(message)
                }
                break;
        case "thanks":
            data = {
                from: "priyami2010@gmail.com",
                to: "priyami2010@gmail.com",
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
    console.log(to, message, type);

    const smtpTransport = mailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        pool: true,
        service: "gmail",
        auth: {
            user: "priyami2010@gmail.com",
            pass: "Mallika2021;"
        }
    })
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