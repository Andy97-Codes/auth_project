import bcrypt from 'bcrypt';



export function validatePasswordLength(req, res, next) {
    const passwordMinimumLength = 8;
    const passwordLengthCheck = req.body.userPassword;
    if(passwordLengthCheck.length < passwordMinimumLength) {
        res.status(400).send({ message: 'Password has to be 8 digits or higher' });
    } else {
        next();
    }
}



export async function hashUserPassword(req, res, next) {
    const saltRounds = 10;
    const passwordToHash = req.body.userPassword;
    const passwordHashed = await bcrypt.hash(passwordToHash, saltRounds);
    req.body.userPassword = passwordHashed;
    next();
} 


