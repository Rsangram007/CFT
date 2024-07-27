import { Model, DataTypes } from 'sequelize';
import  sequelize  from '../config/database';
import { Service } from './service';

export class ServicePriceOption extends Model {}

ServicePriceOption.init(
    {
        serviceId: {
            type: DataTypes.INTEGER,
            references: {
                model: Service,
                key: 'id',
            },
        },
        duration: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        type: {
            type: DataTypes.ENUM('Hourly', 'Weekly', 'Monthly'),
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'ServicePriceOption',
    }
);

Service.hasMany(ServicePriceOption, { foreignKey: 'serviceId' });
ServicePriceOption.belongsTo(Service, { foreignKey: 'serviceId' });
