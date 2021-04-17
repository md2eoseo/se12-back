import client from '../../client';

export default {
  Query: {
    seeItem: async (_, { id }) => {
      try {
        const item = await client.item.findUnique({ where: { id }, include: { category: true } });
        if (!item) {
          return { ok: false, error: '해당 상품이 없습니다.' };
        }
        return { ok: true, item };
      } catch (error) {
        return { ok: false, error };
      }
    },
  },
};
