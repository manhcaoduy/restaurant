import { IsDefined, IsNumber, validateSync } from 'class-validator';
import { DalServiceOptions } from '@backend/core/dal/dal.config';
import { Exclude, Expose } from 'class-transformer';
import * as process from 'process';
import * as fs from 'fs';
import * as yaml from 'js-yaml';

const defaultConfigFiles = [
  'backend/apps/config.yaml',
  'backend/apps/user/config.yaml',
];

@Exclude()
export class AppConfig {
  @Expose()
  @IsNumber()
  @IsDefined()
  httpPort: number;

  @Expose()
  @IsNumber()
  @IsDefined()
  grpcPort: number;
}

export class Config {
  static config: Config;

  @IsDefined()
  mongo: DalServiceOptions;

  @IsDefined()
  app: AppConfig;

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
