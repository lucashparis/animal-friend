import { createNewUserModalService } from "../../services/userService";

export const createNewUserModalAction = async (objUser) => {
    try {
        await createNewUserModalService(objUser);
    } catch(error) {
        
    }
};