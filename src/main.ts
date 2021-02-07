import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {

  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule);

  const port = 3333;

  await app.listen(port);
  logger.log(`🚀 Server started on port ${port}`);
}
bootstrap();
