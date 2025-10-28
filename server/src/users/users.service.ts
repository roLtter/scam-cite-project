import { Injectable, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}

    async createUser(data: Prisma.UserCreateInput): Promise<User> {
        try {
            return await this.prisma.user.create({ data });
        } catch (error) {
            if (error.code === 'P2002' && error.meta?.target?.includes('passport')) {
                throw new ConflictException('Паспорт уже занят');
            }
            throw error;
        }
    }

    async getUsers(): Promise<User[]> {
        return this.prisma.user.findMany();
    }

    async getUser(id: number): Promise<User | null> {
        return this.prisma.user.findUnique({ where: { id } });
    }

    async updateUser(id: number, data: Prisma.UserUpdateInput): Promise<User> {
        return this.prisma.user.update({ where: { id }, data });
    }
}