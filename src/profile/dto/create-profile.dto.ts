import { IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateProfileDto {
    @IsString()
    @IsOptional() 
    bio?: string;

    @IsUUID() 
    userId: string; 
}