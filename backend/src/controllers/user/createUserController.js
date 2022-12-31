import { execute } from '../../services/user/createUserService';

const createNewUserController = async (req, res) => {

  const user = await execute(req.body);

  return res.json(user)
};

export { createNewUserController };