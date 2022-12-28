import { execute } from '../../services/user/createUserService';

const createUserController = async (req, res) => {
  console.log("req.body", req.body);

  const user = await execute(req.body);

  return res.json(user)
};

export { createUserController };