import { execute } from '../../services/user/createUserService';

const createNewUserController = async (req, res) => {
    const user = await execute(req.body);
    if (user.messageError) {
        return res.json(user);
    }
    return res.json(user);
};

export { createNewUserController };