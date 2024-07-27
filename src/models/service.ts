import { Model, DataTypes } from 'sequelize';
import  sequelize  from '../config/database';
import { Category } from './category';

export class Service extends Model {
    id: any;
    name: any;
    type: any;
}

Service.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        type: {
            type: DataTypes.ENUM('Normal', 'VIP'),
            allowNull: false,
        },
        categoryId: {
            type: DataTypes.INTEGER,
            references: {
                model: Category,
                key: 'id',
            },
        },
    },
    {
        sequelize,
        modelName: 'Service',
    }
);

Category.hasMany(Service, { foreignKey: 'categoryId' });
Service.belongsTo(Category, { foreignKey: 'categoryId' });
