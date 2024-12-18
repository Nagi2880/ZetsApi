import { Role } from '@prisma/client';
import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator'
export class UserDto{
    @IsUUID()
    uuid: string;

    @IsEmail()
    @IsNotEmpty()
    email : string;

    @IsNotEmpty()
    @IsString()
    name : string;

    @IsEnum(Role)
    @IsOptional()
    role : Role;
}