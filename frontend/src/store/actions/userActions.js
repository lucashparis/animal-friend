import { createNewUserService } from "../../services/userService";

export const createNewUserAction = async (objUser) => {
    try {   
        await createNewUserService(objUser);
    } catch(error) {
        
    }
};