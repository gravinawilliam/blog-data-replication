import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { envConfig } from '@main/config/env.config';
import { AppModule } from '@main/modules/_global/app.module';

const { nodeEnv, port } = envConfig;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors();
  await app.listen(port || 3000, () => {
    if (nodeEnv !== 'PROD') {
      Logger.log(`✅ OK ${port || 3000}`);
    }
  });
}
bootstrap();
