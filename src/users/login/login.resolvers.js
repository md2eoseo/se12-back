import { Role } from '.prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import client from '../../client';

export default {
  Mutation: {
    login: async (_, { userId, password }) => {
      try {
        // userId 유저 검색
        const user = await client.user.findUnique({ where: { userId } });
        // 검색되는 유저 없으면, 에러 발생
        if (!user) {
          return { ok: false, error: '가입되지 않은 아이디입니다.' };
        }
        // 검색되는 유저 있으면, 비밀번호 비교
        const passwordMatch = await bcrypt.compare(password, user.password);
        // 비밀번호가 일치하지 않으면, 에러 발생
        if (!passwordMatch) {
          return { ok: false, error: '비밀번호가 일치하지 않습니다.' };
        }
        // JWT 발급
        const token = jwt.sign({ id: user.id, admin: user.role === Role.ADMIN }, process.env.JWT_SECRET_KEY);
        return { ok: true, token };
      } catch (error) {
        return { ok: false, error };
      }
    },
  },
};
