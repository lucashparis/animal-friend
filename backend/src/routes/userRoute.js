import { check } from 'express-validator';

module.exports = app => {
  const { userController } = app.controllers;
  app.route('/api/userRegister/').post(userController.userRegister)
}