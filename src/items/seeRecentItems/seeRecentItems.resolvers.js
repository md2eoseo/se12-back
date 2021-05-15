import client from '../../client';

const ITEM_LIMIT = 5;

export default {
  Query: {
    seeRecentItems: async (_, { count }) => {
      try {
        const items = await client.item.findMany({ where: { activate: true }, orderBy: { createdAt: 'desc' }, take: count || ITEM_LIMIT });

        return { ok: true, items };
      } catch (error) {
        return { ok: false, error };
      }
    },
  },
};
