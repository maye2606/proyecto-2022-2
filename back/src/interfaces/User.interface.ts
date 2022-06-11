import * as Sequelize from 'sequelize'

export interface UserAddModel {
    id?: number
    email: string
    password: string
}

export interface UserModel extends Sequelize.Model<UserModel, UserAddModel> {
    id: number
    email: string
    password: string
    createdAt: string
    updatedAt: string
}

export interface UserViewModel {
    id: number
    email: string
}


export interface UserInput extends Sequelize.Optional<UserModel, 'id'> {}
export interface UserOuput extends Required<UserModel> {}