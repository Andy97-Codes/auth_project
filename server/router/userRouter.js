import { Router } from 'express';
import { createNewUser } from '../controller/userController.js';
import { hashUserPassword, validatePasswordLength, } from '../middleware/userMiddleware.js';


const route = Router();


route.post('/user', validatePasswordLength, hashUserPassword, async (req, res) => {
    const newUser = req.body;
    try{
        const createUser = await createNewUser(newUser);
        res.status(201).send({ message: 'User created!'});
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
});


export default route;