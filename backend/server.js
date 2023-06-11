const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 5000; // Change the port number as needed

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin-gaurav:5699256@cluster0.eaxhtws.mongodb.net/Data', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Define your Mongoose schema and model here
// Example:
// const dataSchema = new mongoose.Schema({
//   name: String,
//   class: String,
//   section: String,
//   fatherName: String,
//   mobileNumber: String,
//   address: String,
//   gender: String,
//   packages: String,
// });
// const Data = mongoose.model('Data', dataSchema);

// Define your API endpoints
// Example:
// app.post('/api/data', (req, res) => {
//   const newData = new Data(req.body);
//   newData.save()
//     .then(() => res.json({ message: 'Data saved successfully' }))
//     .catch((error) => res.status(500).json({ error: 'Failed to save data' }));
// });

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
