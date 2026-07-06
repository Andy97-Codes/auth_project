import { Router } from 'express';
import { createNewUser, checkUser } from '../controller/userController.js';
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



route.post('/login', async (req, res) => {
    const checkUserLogin = req.body;
    try {
        const confirmUser = await checkUser(checkUserLogin);
        res.status(200).send({ message: 'login succesfull', userName: checkUserLogin.userName });
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
});



export default route;