import { dbConnection } from '../database/db.js';
import bcrypt from 'bcrypt';



export async function createNewUser(newUser) {
    try {

        const connection = await dbConnection();

        const [userToCreate] = await connection.execute('INSERT INTO user (userName, userPassword) VALUES (?, ?)',
            [newUser.userName, newUser.userPassword] 
        );
        
        connection.end();

    } catch (err) {
       if(err.code === 'ER_DUP_ENTRY') {
        throw new Error('This username already exists, try another one.');
       } 
        throw new Error('Could not create user');
    }
}



export async function checkUser(checkUserLogin) {
    try {
         
        const connection = await dbConnection();

        const [users] = await connection.execute('SELECT * FROM user WHERE userName = ?', 
            [checkUserLogin.userName]
        );

        const user = users[0];

        if(!user) {
            throw new Error('Wrong username or password')
        }

        const match = await bcrypt.compare(checkUserLogin.userPassword, user.userPassword);

        if(!match) {
            throw new Error('Wrong username or password');
        }

        connection.end();

    } catch (err) {
        throw new Error('wrong username or password');
    }
}

