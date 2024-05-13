
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'FinalLab',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgre',
  entities: [],
  synchronize: true,
};

export default config;