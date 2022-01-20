require('dotenv').config({ path: './.env' });

export const jwtConstants = {
  secret: process.env.SECRET_KEY,
};
