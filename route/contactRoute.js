const router = require('express').Router();
const nodemailer = require('nodemailer');

router.post('/contact', (req, res) => {
   let data = req.body;
   if (
      data.name.length === 0 ||
      data.email.length === 0 ||
      data.subject.length === 0 ||
      data.message.length === 0
   ) {
      return res.json({ msg: 'Please Fill All The Fields!' });
   }

   let smtpTransporter = nodemailer.createTransport({
      service: 'Gmail',
      port: 465,
      auth: {
         user: 'jonathanluwebsite@gmail.com',
         pass: 'ktefgckd21',
      },
   });
   let mailOptions = {
      from: data.email,
      to: 'jonathanluwebsite@gmail.com',
      subject: `Message From ${data.name}`,
      html: `
            <h2>Client Info<h2/>
            <ul>
            <li>Name: ${data.name}<li/>
            <li>Email: ${data.email}<li/>
            </ul>
            <h2>Subject</h2>
            <p>${data.subject}<p/>
            <h2>Message</h2>
            <p>${data.message}<p/>
            `,
   };

   smtpTransporter.sendMail(mailOptions, (error) => {
      try {
         if (error)
            return res.status(400).json({ msg: 'Please Fill All The Fields!' });
         res.status(200).json({ msg: 'Thank You For Contacting Jonathan!' });
      } catch (error) {
         if (error)
            return res.status(500).json({ msg: 'There is server error' });
      }
   });
});
module.exports = router;
