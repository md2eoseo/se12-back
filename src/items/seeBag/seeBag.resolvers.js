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
        const itemIds = user.bag.map(bagItem => bagItem.itemId);
        const items = await client.item.findMany({ where: { id: { in: itemIds } } });
        return { ok: true, items };
      } catch (error) {
        return { ok: false, error };
      }
    },
  },
};
