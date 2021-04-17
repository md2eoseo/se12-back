import client from '../../client';

export default {
  Query: {
    getUser: async (_, { id }) => {
      try {
        // id로 유저 검색
        const user = await client.user.findUnique({ where: { id } });
        // 해당되는 유저 없으면, 에러 발생
        if (!user) {
          return { ok: false, error: '해당 id를 가진 유저가 없습니다.' };
        }
        return { ok: true, user };
      } catch (error) {
        return { ok: true, error };
      }
    },
  },
};
