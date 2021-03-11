const mailer = require ('nodemailer');
const {Hello} = require("/Users/karvangum/projects/Portfolio/hello_template.js");
const {Thanks} = require("/Users/karvangum/projects/Portfolio/hello_template.js");
const getEmailData = (to, message, template)=> {
    let data = null;

    switch(template){
        case "hello":
                data = {
                    from: "priyami2010@gmail.com",
                    to: "newtonvithi@gmail.com",
                    subject: 'Portfolio Message',
                    html: Hello()
                }
                break;
        case "thanks":
            data = {
                from: "priyami2010@gmail.com",
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
const sendEmail = (to, message, type) => {

    const smtpTransport = mailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        pool: true,
        service: "gmail",
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