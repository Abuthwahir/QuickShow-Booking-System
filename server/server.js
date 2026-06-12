import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/db.js'
import {clerkMiddleware } from '@clerk/express'
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js"
import showRouter from './routes/showRoutes.js'
import bookingRouter from './routes/bookingroutes.js'
import adminRouter from './routes/adminRouter.js';
import userRouter from './routes/userRouter.js'
const app = express()
const port = process.env.PORT || 3000

await connectDB();



//Middlewares
app.use(express.json())
app.use(clerkMiddleware()) 
app.use(cors())
app.use(express.urlencoded({ extended: true }));



//API routes
app.get('/', (req, res) => res.send('Server is Live!'))
app.use("/api/inngest", serve({ client: inngest, functions }));
app.use('/api/show',showRouter)
app.use('/api/booking/',bookingRouter)
app.use('/api/admin/',adminRouter)
app.use('/api/user',userRouter)

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
