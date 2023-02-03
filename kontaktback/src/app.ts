import express from 'express'
import cors from 'cors'
import contactRouter from './router/contact.routes';
import loginRouter from './router/login.routes';
import userRouter from './router/user.routes';


const app = express()

const allowedOrigins = ['http://localhost:3000'];


const options: cors.CorsOptions = {
    origin: allowedOrigins
};

app.use(cors(options));
app.use(express.json())

app.use("/users", userRouter);
app.use("/contacts", contactRouter);
app.use("/login", loginRouter);

export default app;