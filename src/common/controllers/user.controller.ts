import UserService from '../services/user.service';
import { CreateUserDto } from '../dto/user.dto';
import { Request, Response } from 'express';
import { validateDto } from '../utils/validator.util';
import { constants } from 'http2';

export default class UserController {
  constructor(private readonly userService: UserService) {}

  createUser = async (req: Request, res: Response) => {
    await validateDto(req, CreateUserDto);
    const newUser = await this.userService.createUser(req.body);
    return res.status(constants.HTTP_STATUS_OK).json({ user: newUser });
  };
}
