"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaffService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const staff_schema_1 = require("./staff.schema");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let StaffService = class StaffService {
    staffModel;
    jwtService;
    constructor(staffModel, jwtService) {
        this.staffModel = staffModel;
        this.jwtService = jwtService;
    }
    async create(createStaffDto) {
        const { password } = createStaffDto;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newStaff = new this.staffModel({
            ...createStaffDto,
            password: hashedPassword,
        });
        return newStaff.save();
    }
    async login(loginStaffDto) {
        const { email, password } = loginStaffDto;
        const staff = await this.staffModel.findOne({ email });
        if (!staff) {
            throw new Error('Invalid credentials');
        }
        const isPasswordValid = await bcrypt.compare(password, staff.password);
        if (!isPasswordValid) {
            throw new Error('Invalid credentials');
        }
        const payload = { email: staff.email, role: staff.role };
        const token = this.jwtService.sign(payload);
        return { access_token: token };
    }
    async update(id, updateStaffDto) {
        return this.staffModel.findByIdAndUpdate(id, updateStaffDto, { new: true });
    }
    async getProfile(id) {
        return this.staffModel.findById(id);
    }
};
exports.StaffService = StaffService;
exports.StaffService = StaffService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(staff_schema_1.Staff.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object])
], StaffService);
//# sourceMappingURL=staff.service.js.map