import database from '../../db';
import User from '../models/user'

module.exports = () => {
  return {
      userRegister: async (objUser) => {
          let transaction;
          try {
              transaction = await database.transaction();
  
              const modelUser = {
                  nome: objUser.name,
                  usuario: objUser.user,
                  email: objUser.email,
                  senha: objUser.password,
              }
  
              await User.create(modelUser);
              await transaction.commit();
          } catch (error) {
              console.log(error);
              if (transaction) transaction.rollback();
              throw error;
          }
      }
  }
}