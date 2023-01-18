import database from '../../../db';
import User from '../../models/user';

const execute = async () => {
    let transaction;
    
    try {
        transaction = await database.transaction();
        const users = await User.findAll();

        await transaction.commit();
        return users;
    } catch (error) {
        if (transaction) transaction.rollback();
        throw error;
    }
}

export { execute };