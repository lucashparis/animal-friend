import database from '../../../db';
import User from '../../models/user';
import bcrypt from "bcrypt";

const execute = async (objUser) => {
    let transaction;

    try {
        if (!objUser) return;

        transaction = await database.transaction();

        const virifyUserAlreadyRegistered = async() => {
            const userAlreadyRegistered = await User.findOne({ where: { usuario: objUser.user } });
            return userAlreadyRegistered ? userAlreadyRegistered.dataValues : false;
        }

        const userAlreadyRegistered = await virifyUserAlreadyRegistered();
        if (userAlreadyRegistered) {
            return { messageError: `Usuário ${userAlreadyRegistered.usuario} já utilizado por ${userAlreadyRegistered.nome}`}
        } 
       
        const saltRounds = 10;
        const hash = bcrypt.hashSync(objUser.password, saltRounds);

        const modelUser = {
            nome: objUser.name,
            usuario: objUser.user,
            email: objUser.email,
            senha: hash,
            status: objUser.status,
        };

        const user = await User.create(modelUser);
        await transaction.commit();
        return user;
    } catch (error) {
        if (transaction) transaction.rollback();
        throw error;
    }
}

export { execute };