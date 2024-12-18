import {  Get, Controller, Post, Body} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto';

@Controller('api')
export class UserController {
    constructor(private UserService: UserService){}    

    @Get('allusers')
    async getUsers(){
        return this.UserService.getAllUser()
    }
    @Post('newuser')
    async createUser(@Body() userDto: UserDto){
        return this.UserService.NewUser(userDto) && console.log('created new used')
    }
}
