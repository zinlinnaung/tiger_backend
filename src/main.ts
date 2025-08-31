import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import express from 'express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    rawBody: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  app.enableCors();
  app.setGlobalPrefix('api');
  app.useBodyParser('json', { limit: '10mb' });
  app.useStaticAssets(join(__dirname, '..', 'uploads'), {
    prefix: '/uploads', // Adjust the prefix as needed
  });
  // app.use('/uploads', express.static('uploads'));

  if (process.env.MODE === 'staging' || process.env.MODE === 'development') {
    const config = new DocumentBuilder()
      .setTitle('Citizan Pay Backend API')
      .setDescription('Citizan Pay Backend API')
      .setVersion('1.0.0')
      .addBearerAuth()
      .build();

    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup('docs', app, document);
  }

  await app.listen(process.env.PORT || 8001, process.env.HOST);
}
bootstrap();
