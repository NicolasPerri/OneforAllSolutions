const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const packagesRoutes = require('./routes/packages');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Connect to database
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/packages', packagesRoutes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});