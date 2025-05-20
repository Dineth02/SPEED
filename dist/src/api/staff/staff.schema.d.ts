import { Document } from 'mongoose';
export type StaffDocument = Staff & Document;
export declare class Staff {
    name: string;
    email: string;
    password: string;
    role: 'moderator' | 'analyst';
    createdAt: Date;
}
export declare const StaffSchema: any;
