const express = require('express');
const mongoose = require('mongoose');
const jobApplicationRoutes = require('./routes/jobApplication');

// Initialize Express app
const app = express();

// Middleware to parse incoming request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/professional_odyssey', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('MongoDB connection error:', err));

// Use job application routes
app.use('/api/job-application', jobApplicationRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
