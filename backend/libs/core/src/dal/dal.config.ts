import { IsBoolean, IsDefined, IsString } from 'class-validator';

export class DalServiceOptions {
  @IsString()
  @IsDefined()
  uri: string;

  @IsBoolean()
  @IsDefined()
  debug: boolean;
}
