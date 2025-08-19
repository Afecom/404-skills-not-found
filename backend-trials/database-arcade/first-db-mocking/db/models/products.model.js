import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
    class Product extends Model {
        static associate(models){
            Product.belongsTo(models.Category, {
                foreignKey: 'categoryId',
                as: 'categories'
            })
        }
    }

    Product.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        categoryId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                isFloat: true
            }
        }
    },{})
}