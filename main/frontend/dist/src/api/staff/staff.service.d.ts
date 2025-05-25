import { Model } from 'mongoose';
import { Staff, StaffDocument } from './staff.schema';
import { CreateStaffDto } from './dto/create-staff.dto';
import { LoginStaffDto } from './dto/login-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { JwtService } from '@nestjs/jwt';
export declare class StaffService {
    private staffModel;
    private readonly jwtService;
    constructor(staffModel: Model<StaffDocument>, jwtService: JwtService);
    create(createStaffDto: CreateStaffDto): Promise<Staff>;
    login(loginStaffDto: LoginStaffDto): Promise<any>;
    update(id: string, updateStaffDto: UpdateStaffDto): Promise<Staff>;
    getProfile(id: string): Promise<Staff>;
}
