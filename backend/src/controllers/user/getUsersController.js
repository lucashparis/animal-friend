import { execute } from '../../services/user/getUsersService';

const getUsersController = async (req, res) => {
    const user = await execute();
    if (user.messageError) {
        return res.json(user);
    }
    return res.json(user);
};

export { getUsersController };