import { Model, DataTypes, HasManyGetAssociationsMixin } from 'sequelize';
import  sequelize  from '../config/database'; // Create this file to initialize sequelize
import { Service } from './service';

// export class Category extends Model {
//     name: any;
//     getServices() {
//         throw new Error('Method not implemented.');
//     }
// }


export class Category extends Model {
    public id!: number;
    public name!: string;

    // Define the mixin for retrieving associated services
    public getServices!: HasManyGetAssociationsMixin<Service>;

    // Other fields and methods can be added here as needed
}


Category.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Category',
    }
);
