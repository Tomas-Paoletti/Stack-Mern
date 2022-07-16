import userRouter from '#Routes/user.routes.js';
import express, { application } from 'express';

const App = express();

// todo modlewares, routes etx....
App.use(express.json())

//routes
application.use('/user', userRouter)

export default App;
