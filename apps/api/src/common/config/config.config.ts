import { ConfigModuleOptions } from '@nestjs/config';
import * as Joi from 'joi';
import { createTypedConfig } from 'nestjs-typed-config';

export const configModuleOptions: ConfigModuleOptions = {
  isGlobal: true,
  envFilePath: ['.env.local', '.env.production'],
};

export const { TypedConfigService, TypedConfigModule } = createTypedConfig({
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().required(),
  DB_USER: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  JWT_SECRET_KEY: Joi.string().required(),
  JWT_ACCESS_TOKEN_EXPIRES: Joi.number().required(),
  JWT_REFRESH_TOKEN_EXPIRES: Joi.number().required(),
  DB_DATABASE: Joi.string().required(),
});

export type TypedConfigService = InstanceType<typeof TypedConfigService>;
