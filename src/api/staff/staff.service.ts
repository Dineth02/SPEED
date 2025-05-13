import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Staff, StaffDocument } from './staff.schema';
import { CreateStaffDto } from './dto/create-staff.dto';
import { LoginStaffDto } from './dto/login-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class StaffService {
  constructor(
    @InjectModel(Staff.name) private staffModel: Model<StaffDocument>,
    private readonly jwtService: JwtService,
  ) {}

  async create(createStaffDto: CreateStaffDto): Promise<Staff> {
    const { password } = createStaffDto;
    const hashedPassword = await bcrypt.hash(password, 10);  // Hashing the password before storing
    const newStaff = new this.staffModel({
      ...createStaffDto,
      password: hashedPassword,
    });
    return newStaff.save();
  }

  async login(loginStaffDto: LoginStaffDto): Promise<any> {
    const { email, password } = loginStaffDto;
    const staff = await this.staffModel.findOne({ email });
    
    if (!staff) {
      throw new Error('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(password, staff.password);
    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }

    // Generate JWT token
    const payload = { email: staff.email, role: staff.role };
    const token = this.jwtService.sign(payload);

    return { access_token: token };
  }

  async update(id: string, updateStaffDto: UpdateStaffDto): Promise<Staff> {
    return this.staffModel.findByIdAndUpdate(id, updateStaffDto, { new: true });
  }

  async getProfile(id: string): Promise<Staff> {
    return this.staffModel.findById(id);
  }
}