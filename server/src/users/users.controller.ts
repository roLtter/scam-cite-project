import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { Prisma, User } from '@prisma/client';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    async createUser(@Body() data: { passport: string; fullName: string }): Promise<User> {
        return this.usersService.createUser(data);
    }

    @Get()
    async getUsers(): Promise<User[]> {
        return this.usersService.getUsers();
    }

    @Get(':id')
    async getUser(@Param('id', ParseIntPipe) id: number): Promise<User | null> {
        return this.usersService.getUser(id);
    }

    @Put(':id')
    async updateUser(
        @Param('id', ParseIntPipe) id: number,
        @Body() data: { passport?: string; fullName?: string },
    ): Promise<User> {
        return this.usersService.updateUser(id, data);
    }
}