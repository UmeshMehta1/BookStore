import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose'
import bookRoute from "./route/routeBook.js";
import userRoute from './route/userRoute.js'
import cors from 'cors'
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000

const URI = process.env.MongoDBURI;


// connect to mongoDB
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}

app.use(cors())
app.use(express.json())

//route define
app.use('/book',bookRoute)
app.use('/user', userRoute)

app.listen(PORT,()=>{
  console.log(`Server Start Port Number: ${PORT}`);
})