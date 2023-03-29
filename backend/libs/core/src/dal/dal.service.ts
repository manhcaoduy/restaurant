import { Connection, ConnectOptions, Mongoose } from 'mongoose';
import * as mongoose from 'mongoose';
import { Inject, OnModuleInit } from '@nestjs/common';
import { DAL_SERVICE_OPTIONS, DEFAULT_OPTIONS } from './dal.constant';
import { DalServiceOptions } from './dal.config';

//todo: add logger here
export class DalService implements OnModuleInit {
  instance: Mongoose;
  connection: Connection;
  debug: boolean;
  uri: string;

  constructor(@Inject(DAL_SERVICE_OPTIONS) options: DalServiceOptions) {
    this.uri = options.uri;
    if (options.debug === undefined) {
      this.debug = DEFAULT_OPTIONS.debug;
    } else {
      this.debug = options.debug;
    }
  }

  async onModuleInit() {
    await this.connect(this.uri);
  }

  async connect(url: string, config: ConnectOptions = {}) {
    const debug = this.debug;

    mongoose.set('debug', function (collectionName, methodName, ...methodArgs) {
      if (debug) {
        console.log('Hello Boiz');
      }
    });

    const instance = await mongoose.connect(url, {
      ...config,
      autoCreate: true,
      autoIndex: true,
    });

    this.instance = instance;
    this.connection = instance.connection;

    return this.connection;
  }

  isConnected(): boolean {
    return this.connection && this.connection.readyState === 1;
  }

  async disconnect() {
    await mongoose.disconnect();
    this.instance.disconnect();
  }

  async destroy() {
    if (process.env.NODE_ENV !== 'test')
      throw new Error('Allowed only in test mode');

    await mongoose.connection.dropDatabase();
  }
}
