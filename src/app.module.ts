import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { BookController } from './book/book.controller';
import { BookModule } from './book/book.module';
import { LoggerMiddleware } from './LoggerMiddleware';

@Module({
  imports: [BookModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(BookController);
  }
}
