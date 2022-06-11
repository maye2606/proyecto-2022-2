import * as Sequelize from 'sequelize'
import sequelizeConnection  from '../config/db'
import { UserAddModel, UserModel } from '../interfaces/User.interface'

export const User = sequelizeConnection.define<UserModel, UserAddModel>('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type:Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: Sequelize.STRING
})