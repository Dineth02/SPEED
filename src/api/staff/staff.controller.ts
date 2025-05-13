import { Controller, Post, Body, Put, Param, Get } from '@nestjs/common';
import { StaffService } from './staff.service';
import { CreateStaffDto } from './dto/create-staff.dto';
import { LoginStaffDto } from './dto/login-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';

@Controller('staff')
export class StaffController {
  constructor(private readonly staffService: StaffService) {}

  @Post('register')
  async register(@Body() createStaffDto: CreateStaffDto) {
    return this.staffService.create(createStaffDto);
  }

  @Post('login')
  async login(@Body() loginStaffDto: LoginStaffDto) {
    return this.staffService.login(loginStaffDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateStaffDto: UpdateStaffDto) {
    return this.staffService.update(id, updateStaffDto);
  }

  @Get(':id')
  async getProfile(@Param('id') id: string) {
    return this.staffService.getProfile(id);
  }
}