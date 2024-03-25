import express from 'express';
import router from '../src/routes/index';
import "reflect-metadata";    
import { AppDataSource } from './config/dataSource';

const app = express();
app.use(express.json());
router(app);

AppDataSource.initialize().then(() => {
  console.log('Conexão com o banco de dados estabelecida');
}).catch((erro) => {console.log(erro)});

  

export default app;
