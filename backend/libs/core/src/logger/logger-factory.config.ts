import {IsDefined, IsString} from "class-validator";

export class LoggerFactoryConfig {
  @IsString()
  @IsDefined()
  logLevel: string;
}