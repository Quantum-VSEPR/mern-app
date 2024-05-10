const mongoose = require("mongoose");
const express = require("express");
const app = express();
require("dotenv").config();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// Use the following code after providing MONGODB_URI
// mongoose.connect(process.env.MONGODB_URI)
// .then(() => {
//   console.log('Connected to MongoDB')
//   app.listen(3000, () => {
//     console.log('Server is running on port 3000')
//   })
// })
// .catch((error) => {
//   console.error('Error connecting to MongoDB:', error)
// })
