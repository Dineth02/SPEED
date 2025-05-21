import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StaffDocument = Staff & Document;

@Schema()
export class Staff {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;  // Store hashed password (not plain text)

  @Prop({ required: true, enum: ['moderator', 'analyst'] })
  role: 'moderator' | 'analyst';

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const StaffSchema = SchemaFactory.createForClass(Staff);