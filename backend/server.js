const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const port = 5000;

app.use(cors());
app.use(express.json());

const userSchema = new mongoose.Schema({
  FirstName: String,
  LastName: String,
  Age:String,
  PhoneNumber:String,
  Gender:String,
  email: String,
  password: String,
}, { collection: '`Signup_data`' }); // Specify the collection name here

const User = mongoose.model('User', userSchema);

app.post('/signup', async (req, res) => {
  const { FirstName, LastName, Age, PhoneNumber, Gender, email, password } = req.body;
  console.log("signup");
  console.log(FirstName, LastName, Age, PhoneNumber, Gender, email, password);
  const newUser = new User({
      FirstName,
      LastName,
      Age,
      PhoneNumber,
      Gender,
      email,
      password,
  });

  try {
      await newUser.save();
      res.json({ message: 'Signup successful!' });
  } catch (error) {
      console.error('Error during signup:', error);
      res.status(500).json({ message: 'Error occurred during signup.' });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  try {
    const users = await User.find();
    // console.log("JI",users);
    for (const user of users) {
      if (user.email === email || user.password === password) {
        // Successful login
        console.log("Working", user.email, user._id);
        return res.json({ message: 'Login successful!', userId: user._id });
      }
    }    
    // If no matching user is found
    console.log("Not working");
    res.status(401).json({ message: 'Invalid email or password.' });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Error occurred during login.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
