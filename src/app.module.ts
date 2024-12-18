import { Global, Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';
import { PrismaModule } from './prisma.module';

@Global()
@Module({
  imports: [UserModule, ProfileModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
