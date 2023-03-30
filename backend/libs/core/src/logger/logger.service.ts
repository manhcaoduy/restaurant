import winston from 'winston';

export class LoggerService {
  private logger: winston.Logger;
  constructor(logger: winston.Logger) {
    this.logger = logger;
  }

  debug(message: any) {
    this.logger.debug(message);
  }

  info(message: any) {
    this.logger.info(message);
  }

  warn(message: any) {
    this.logger.warn(message);
  }

  error(message: any) {
    this.logger.error(message);
  }

  critical(message: any) {
    this.logger.crit(message);
  }
}
