export class UpdateStaffDto {
  readonly name?: string;
  readonly email?: string;
  readonly role?: 'moderator' | 'analyst';
  readonly password?: string;
}