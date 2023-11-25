import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import morgan from 'morgan';
import cors from 'cors';
import mysql from 'mysql2';
// import database from './config/database.js';
import router from './routes/restaurantRoutes.js'



const app = express()


// app.use(
//     cors({
//       credentials: true,
//       origin: ['https://aadhaarscan.netlify.app']
//     })
//   );

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(morgan("dev"));

// app.get('/check-connection', (req, res) => {
//     database.query('SELECT 1', (err) => {
//       if (err) {
//         console.log(err,"this is the error")
//         res.status(500).json({ message: 'Database connection error' });
//       } else {
//         res.json({ message: 'Database connected successfully' });
//       }
//     });
//   });

app.use('/api/v1',router)

const port =  process.env.PORT || 3000

app.listen(port,()=>{
    console.log(`The server connection is now established and running on port ${port}`)
})