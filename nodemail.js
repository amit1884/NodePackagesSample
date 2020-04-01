"use strict";
const nodemailer = require("nodemailer");


// async..await is not allowed in global scope, must use a wrapper
  let transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
      user: 'cseamit084@gmail.com', // generated ethereal user
      pass: 'slugterraburpy' // generated ethereal password
    }
  });

  // send mail with defined transport object
  let mailOptions ={
    from: 'cseamit084@gmail.com', // sender address
    to: "2018ugcs084@nitjsr.ac.in,amitraj200raj@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello Ichigo Kurosaki</b>" // html body
  };
transporter.sendMail(mailOptions,(error,info)=>{
    if(error)
    console.log(error)
    else{
        console.log('Email Sent: '+info.response);
    }
});
