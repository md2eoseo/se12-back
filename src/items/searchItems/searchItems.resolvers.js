import client from '../../client';

const PAGE_SIZE = 20;
export default {
  Query: {
    searchItems: async (_, { term, categoryId, minPrice, maxPrice, lastId }) => {
      try {
        const items = await client.item.findMany({
          where: {
            AND: [
              { name: { contains: term } },
              { categoryId },
              { price: { gte: minPrice } },
              { price: { lte: maxPrice } },
              { activate: true },
            ],
          },
          orderBy: { createdAt: 'desc' },
          take: PAGE_SIZE,
          skip: lastId ? 1 : 0,
          ...(lastId && { cursor: { id: lastId } }),
        });
        let lastItemId = null;
        if (!items) {
          lastItemId = items[items.length - 1].id;
        }
        return { ok: true, items, lastId: lastItemId };
      } catch (error) {
        return { ok: false, error };
      }
    },
  },
};
