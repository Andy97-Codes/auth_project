import express from 'express';
import cors from 'cors';
import route from './router/authRouter.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use(route);



const PORT = 8080;
app.listen(PORT);
console.log(`server is running on port ${PORT}`);