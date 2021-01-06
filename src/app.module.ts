import { Module } from '@nestjs/common';
import { AppController } from './movies/app.controller';
import { MoviesModule } from './movies/movies.module';

@Module({
  imports: [MoviesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
