import { dbConnection } from '../database/db.js';



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