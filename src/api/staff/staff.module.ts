import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Staff, StaffSchema } from './staff.schema';
import { StaffService } from './staff.service';
import { StaffController } from './staff.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Staff.name, schema: StaffSchema }]),
    JwtModule.register({
      secret: 'SECRET_KEY', // Use a better secret in production
      signOptions: { expiresIn: '60m' }, // Token expiry
    }),
  ],
  controllers: [StaffController],
  providers: [StaffService],
  exports: [StaffService],
})
export class StaffModule {}