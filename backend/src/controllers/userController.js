module.exports = app => {
  return {
    userRegister: async (req, res) => {
      const objUser = req.body;
      try {
        const { userService } = app.services;
        await userService.userRegister(objUser);
        return res.status(201).send();
      } catch (error) {
        
      }
    }
  };
};
