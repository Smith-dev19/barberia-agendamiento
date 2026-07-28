import express from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/auth.routes.js';
import customerRoutes from './routes/customer.routes.js'
const app = express();

app.use(morgan('dev'));
app.use(express.json())
app.use(cookieParser())
app.use('/api',authRoutes)
app.use('/api',customerRoutes)

export default app;
