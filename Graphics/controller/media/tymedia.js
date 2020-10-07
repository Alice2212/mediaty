var nodemailer = require('nodemailer');

exports.indexPage = (req,res)=>{
    res.render('TYPLUS/index');
};

exports.projectPage = (req, res)=>{
    res.render('TYPLUS/project');
};

exports.contactPage = (req, res)=>{
    res.render('TYPLUS/contact');
};

exports.servicesPage = (req, res)=>{
    res.render('TYPLUS/services');
};
exports.aboutPage = (req, res)=>{
    res.render('TYPLUS/about');
};


//handling the contact from
exports.contactForm = (req,res)=>{
    var output = `
        <p>You have a new contact request</p>
        <h3>Contact details </h3>
        <ul>
            <li>firstName: ${req.body.first_name}</li>
            <li>lastName: ${req.body.Last_name}</li>
            <li>email: ${req.body.email}</li>
        </ul>
        <h3>Message</h3>
       <p> ${req.body.message} </p>
    `;
    let transporter = nodemailer.createTransport({      
            host: "smtp.gmail.email",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
            user: "hezealice@gmail.com", // generated ethereal user
            pass: "Alice400" // generated ethereal password
            },
            
            //TOSIN WHEN SENDING FROM LOCAL HOST DO DIS
            tls:{
                rejectUnauthorized:false
            }
         });
    
      // send mail with defined transport object
      let mailOptions = {
        from:  req.body.email + ' &lt;' + req.body.email + '&gt;', // sender address
        to: "hezealice338@gmail.com", // list of receivers
        subject: "TYMEDIA contact form", // Subject line
        text: "Hello world?", // plain text body
        html: output // html body
      };

      transporter.sendMail(mailOptions, (error, info) =>{
          if(error){
              return console.log(error);
             
          }
          console.log("Message sent: %s", info.messageId);
          // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        
          // Preview only available when sending through an Ethereal account
          console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        //after submission
        res.redirect('index')

      });     
};


