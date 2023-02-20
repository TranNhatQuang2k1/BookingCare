'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Speciatly extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Speciatly.init({
        description: DataTypes.TEXT,
        image: DataTypes.STRING,
        lastname: DataTypes.STRING,
        address: DataTypes.STRING,
        gender: DataTypes.BOOLEAN,
        roleid: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Speciatly',
    });
    return Speciatly;
};