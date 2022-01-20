import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from './model/user.model';

export const AuthUser = createParamDecorator((_, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  const user = request.user as User;
  // delete user.password;
  console.log(user);
  return user;
});
