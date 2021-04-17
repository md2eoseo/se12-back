import client from '../../client';

export default {
  Query: {
    searchItems: async (_, { term, categoryId, minPrice, maxPrice }) => {
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
        });
        return { ok: true, items };
      } catch (error) {
        return { ok: false, error };
      }
    },
  },
};
