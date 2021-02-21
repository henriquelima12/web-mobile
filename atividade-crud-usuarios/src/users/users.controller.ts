import { Body, Controller, Get, Post } from '@nestjs/common';
import {User} from './interfaces/user.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}

    @Get()
    index(): User[] {
      return this.usersService.findAll();
    }

    @Post()
    create(@Body() user: User): User {
        return this.usersService.create(user);
    }
    
}


