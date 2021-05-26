import client from '../../client';

export default {
  Query: {
    seeBag: async (_, __, { loggedInUser }) => {
      try {
        const user = await client.user.findUnique({
          where: { id: loggedInUser.id },
          include: { bag: true },
        });
        if (!user) {
          return { ok: false, error: '존재하지 않는 사용자입니다.' };
        }
        const bagItems = await client.bagItem.findMany({
          where: { userId: loggedInUser.id },
          include: { user: true, item: true },
          orderBy: { createdAt: 'asc' },
        });
        return { ok: true, bagItems };
      } catch (error) {
        return { ok: false, error };
      }
    },
  },
};
