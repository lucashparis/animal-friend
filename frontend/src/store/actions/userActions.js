import { createNewUserService, getUsersService } from "../../services/userService";

export const createNewUserAction = async (objUser) => {
    try {   
        const response = await createNewUserService(objUser);
        return response;
    } catch(error) {
        
    }
};

export const getUsersAction = async () => {
    try {   
        const response = await getUsersService();
        return response;
    } catch(error) {
        
    }
};