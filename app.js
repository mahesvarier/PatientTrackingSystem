const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express()
dotenv.config();
const port = 3000
const patientRoute = require('./routes/patient');

mongoose.connect(process.env.DB_CONNECT,
  { useUnifiedTopology: true },
  () => {
    console.log('Connected to DB');
  })

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json());
app.use('/api/patient', patientRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})