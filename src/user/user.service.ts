import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService){}
    async getAllUser(){
        return this.prisma.user.findMany();
    }
    async NewUser(userDto: UserDto) {
        return this.prisma.user.create({
            data: {
                email: userDto.email,
                name: userDto.name,
                rol : userDto.role ?? 'USER'
            }
        })
    }
}
