import express from 'express';
import bodyParser from 'body-parser';
 
import  sequelize  from './config/database';
import routes from './routes';

const app = express();
const PORT = process.env.PORT || 3000;

 
app.use(bodyParser.json());
app.use(routes);

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}).catch((error) => {
    console.error('Unable to connect to the database:', error);
});
