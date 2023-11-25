import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import morgan from 'morgan';
import cors from 'cors';
import router from './routes/restaurantRoutes.js'


const app = express()

app.use(morgan("dev"));
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(
    cors({
      credentials: true,
      origin: ['http://localhost:3000']
    })
  );

app.use('/api/v1',router)

const port =  process.env.PORT || 3000

app.listen(port,()=>{
    console.log(`The server connection is now established and running on port ${port}`)
})