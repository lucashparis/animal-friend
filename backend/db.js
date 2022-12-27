import { Sequelize } from "sequelize";
const sequelize = new Sequelize('animal_friend', 'lucas.paris', '@Mysql', {
    host: 'localhost',
    post: 3306,
    dialect: 'mysql'
});

module.exports = sequelize;

