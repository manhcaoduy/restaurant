import { IsDefined, IsNumber, IsString, validateSync } from 'class-validator';
import { DalServiceOptions } from '@backend/core/dal/dal.config';
import * as process from 'process';
import * as fs from 'fs';
import * as yaml from 'js-yaml';
import { LoggerFactoryConfig } from '@backend/core/logger/logger-factory.config';

const defaultConfigFiles = [
  'backend/apps/config.yaml',
  'backend/apps/bff/config.yaml',
];

export class AppConfig {
  @IsNumber()
  @IsDefined()
  httpPort: number;
}

export class GrpcConfig {
  @IsString()
  @IsDefined()
  userEndpoint: string;

  @IsString()
  @IsDefined()
  itemEndpoint: string;

  @IsNumber()
  @IsDefined()
  maxRetries: number;
}

export class Config {
  static config: Config;

  @IsDefined()
  mongo: DalServiceOptions;

  @IsDefined()
  app: AppConfig;

  @IsDefined()
  grpc: GrpcConfig;

  @IsDefined()
  log: LoggerFactoryConfig;

  static load(): Config {
    if (this.config) {
      return this.config;
    }

    let configFiles = defaultConfigFiles;
    if (process.env.configFiles) {
      configFiles = process.env.configFiles.split(',');
    }

    let config = new Config();
    for (const file of configFiles) {
      const fileContents = fs.readFileSync(file, 'utf8');
      const data = yaml.load(fileContents);
      config = Object.assign(config, data);
    }
    const errors = validateSync(config);
    if (errors.length > 0) {
      throw new Error(`${errors}`);
    }

    this.config = config;
    return this.config;
  }

  constructor(init?: Partial<Config>) {
    Object.assign(this, init);
  }
}
