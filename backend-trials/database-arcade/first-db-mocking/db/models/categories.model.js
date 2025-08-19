import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
    class Category extends Model {
        static associate(models){
            Category.hasMany(models.Products, {
                foreignKey: 'categoryId',
                as: 'products'
            })
        }
    }

    Category.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    }, {
        sequelize,
        modelName: 'Category',
        tableName: 'Categories',
        timestamps: true
    })
    return Category
}