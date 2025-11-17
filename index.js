const express = require('express');
const app = express()
require('dotenv').config();
const connectDB = require('./db/connect');
const candidateRoutes = require('./routes/candidateRoutes');
app.use(express.json());

app.use("/api",candidateRoutes);

connectDB(process.env.MONGO_URL)//Database Connection
.then(
    ()=>{
        console.log('Connected to DB');
        app.listen(3000, () => {
        console.log('Server is running');
        }); 
    }
).catch((err)=>{
    console.log(err);
})
