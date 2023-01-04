import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Opción que remueve propiedades que no tiene mi DTO.
      forbidNonWhitelisted: true, // Opción que revisa que solo vengan las propiedades de mi DTO.
    }),
  );
  await app.listen(3000);
}
bootstrap();
