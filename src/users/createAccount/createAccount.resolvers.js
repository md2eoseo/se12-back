import bcrypt from 'bcrypt';
import client from '../../client';

export default {
  Mutation: {
    createAccount: async (_, { userId, password, email, name, address, role }) => {
      try {
        // 존재하는 email인지 확인
        const exist = await client.user.findFirst({
          where: { OR: [{ userId }, { email }] },
        });
        // 존재하는 email이라면, 에러 발생
        if (exist) {
          return {
            ok: false,
            error: '사용 중인 아이디/이메일입니다.',
          };
        }
        // password 암호화
        const hashedPassword = await bcrypt.hash(password, 10);
        // 존재하지 않는 email이라면, User 생성
        await client.user.create({
          data: {
            userId,
            password: hashedPassword,
            email,
            name,
            address,
            role,
          },
        });
        return { ok: true };
      } catch (error) {
        return { ok: true, error };
      }
    },
  },
};
