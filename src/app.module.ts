import { Module } from '@nestjs/common';
import { IetzzTsModule } from './ietzz-ts/ietzz-ts.module';
import { ietzzController } from './ietzz-ts/Controllers/ietzz.controller';


@Module({
  imports: [IetzzTsModule],
  controllers: [ietzzController]
})
export class AppModule {}
