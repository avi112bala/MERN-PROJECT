const express=require('express');
const nodemailer=require('nodemailer');
const cors=require('cors');
require('./db/config');
const User = require('./db/User');
const UserBook=require('./db/Userbook');
const app=express();



app.use(express.json())
app.use(cors())

// checkEmail

app.post("/check-email", async (req, res) => {
  const { email } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.json({ emailExists: true });
    } else {
      res.json({ emailExists: false });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});



// Signup 

app.post("/register", async (req, resp) => {
  let user = new User(req.body);
  let result = await user.save();
  resp.send(result);
});

// BOOK 

app.post('/book',async(req,resp)=>{
   let user=new UserBook(req.body);
   let result =await user.save();
   resp.send(result);
})










// Login

app.post("/login", async (req, res) => {
  const { email } = req.body;

  try {
    // Find the user with the entered email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    // Successful login
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});





// CREATE NODEMAILER

app.post("/send-email", async (req, res) => {
  const { name, email, Msg } = req.body;
  console.log(req.body)

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "roveindia1518@gmail.com",
      pass: "noqsmlbblgwceyyg",
    },
  });

  const mailOptions = {
    from: "roveindia1518@gmail.com",
    to: "roveindia1518@gmail.com",
    subject: "New message from your website",
    text: `${name} (${email}) says: (${Msg})`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({status:"ok",msg:'Email sent'});
  } catch (error) {
    console.error(error);
    res.status(500).send({status:"FAIL" ,msg:'Email is Not Sent'});
  }
});






app.listen(5000);