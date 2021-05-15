import bcrypt from 'bcrypt';
import client from '../../client';

export default {
  Mutation: {
    createAccount: async (_, { userId, password, email, name, address, role }) => {
      try {
        // 존재하는 userId, email인지 확인
        const userIdExist = await client.user.findUnique({
          where: { userId },
        });
        const emailExist = await client.user.findFirst({
          where: { email },
        });
        // 존재하는 userId, email이라면, 에러 발생
        if (userIdExist || emailExist) {
          return {
            ok: false,
            error: '사용 중인 아이디/이메일입니다.',
            userIdExist: Boolean(userIdExist),
            emailExist: Boolean(emailExist),
          };
        }
        // password rule 체크
        const match = password.match(/^(?=.*[A-z])(?=.*[0-9])(?=.{8,16})/);
        if (!match) {
          return { ok: false, error: '비밀번호 생성 규칙에 맞지 않습니다.' };
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
