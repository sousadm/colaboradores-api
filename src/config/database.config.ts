import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { requiredEnvs } from 'src/config/utils';

export default registerAs<TypeOrmModuleOptions>('database', () => {
  requiredEnvs([
    'DATABASE_HOST',
    'DATABASE_DATABASE_NAME',
    'DATABASE_USERNAME',
    'DATABASE_PASSWORD',
    'DATABASE_PORT',
  ]);

  return {
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_DATABASE_NAME,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    port: parseInt(process.env.DATABASE_PORT as string, 10),
    entities: ['dist/database/entities/*.entity{.ts,.js}'],
    migrations: ['dist/migrations/*{.ts,.js}'],
    autoLoadEntities: true,
    synchronize: false,
    logging: process.env.DATABASE_LOGGING === 'true',
  };
});
