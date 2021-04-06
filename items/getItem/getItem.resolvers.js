import client from '../../client';

export default {
  Query: {
    getItem_title: async (_, { title }) => {
      try {
        const item = await client.item.findMany({ where: { title } });
        if (!title) {
          return { ok: false, error: '해당하는 책이 없습니다.' };
        }
        return { ok: true, item };
      } catch (error) {
        return { ok: true, error };
      }
    },
  },
};
