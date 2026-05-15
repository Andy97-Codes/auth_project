import { dbConnection } from '../database/db.js';


// Finish this later. push setup to github
export async function createNewUser(userName, userPassword) {
    try {

        const connection = await dbConnection();

        const [createUser] = await connection.execute("INSERT INTO user userName = ? userPassword = ? "
            [userName], [userPassword]
        );
        return {body: createUser = userCreated}
    } catch (err) {
        
    }

}