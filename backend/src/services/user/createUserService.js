import database from '../../../db'
import User from '../../models/user'

const execute = async (objUser) => {
  console.log("execute", objUser);
  
  let transaction;

  try {
    if (!objUser) return;

    transaction = await database.transaction();
    
    const modelUser = {
      nome: objUser.name,
      usuario: objUser.user,
      email: objUser.email,
      senha: objUser.password,
    };
    
    const user = await User.create(modelUser);
    await transaction.commit();
    return user;
  } catch (error) {
      // console.log(error);
      if (transaction) transaction.rollback();
      throw error;
    }
}

export { execute };