import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ExercisesModule } from './exercises/exercises.module';
import { AttemptsModule } from './attempts/attempts.module';
import { EvaluationModule } from './evaluation/evaluation.module';
import { DeeplModule } from './deepl/deepl.module';
import { FeedbackModule } from './feedback/feedback.module';
import { ErrorTagsModule } from './error-tags/error-tags.module';
import { WeaknessModule } from './weakness/weakness.module';
import { RecommendationModule } from './recommendation/recommendation.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    UsersModule,
    ExercisesModule,
    AttemptsModule,
    EvaluationModule,
    DeeplModule,
    FeedbackModule,
    ErrorTagsModule,
    WeaknessModule,
    RecommendationModule,
  ],
})
export class AppModule {}
