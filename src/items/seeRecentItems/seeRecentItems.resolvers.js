import client from '../../client';

const ITEM_LIMIT = 6;

export default {
  Query: {
    seeRecentItems: async () => {
      try {
        const items = await client.item.findMany({
          orderBy: { createdAt: 'desc' },
          take: ITEM_LIMIT,
        });

        return { ok: true, items };
      } catch (error) {
        return { ok: false, error };
      }
    },
  },
};
