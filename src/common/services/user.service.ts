import { PrismaClient } from '@prisma/client';
import { CreateUserDto } from '../dto/user.dto';

export default class UserService {
  constructor(private readonly prismaClient: PrismaClient) {}

  createUser = async (user: CreateUserDto) => {
    return this.prismaClient.users.create({ data: { ...user } });
  };
}
