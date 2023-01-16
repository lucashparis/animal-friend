import { createNewUserService } from "../../services/userService";

export const createNewUserAction = async (objUser) => {
    try {   
        const response = await createNewUserService(objUser);
        return response;
    } catch(error) {
        
    }
};