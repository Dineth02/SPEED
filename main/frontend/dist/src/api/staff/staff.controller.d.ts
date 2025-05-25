import { StaffService } from './staff.service';
import { CreateStaffDto } from './dto/create-staff.dto';
import { LoginStaffDto } from './dto/login-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
export declare class StaffController {
    private readonly staffService;
    constructor(staffService: StaffService);
    register(createStaffDto: CreateStaffDto): Promise<import("./staff.schema").Staff>;
    login(loginStaffDto: LoginStaffDto): Promise<any>;
    update(id: string, updateStaffDto: UpdateStaffDto): Promise<import("./staff.schema").Staff>;
    getProfile(id: string): Promise<import("./staff.schema").Staff>;
}
