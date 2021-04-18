import client from '../../client';

export default {
  Query: {
    seeCategories: async () => {
      try {
        const categories = await client.category.findMany();
        return { ok: true, categories };
      } catch (error) {
        return { ok: false, error };
      }
    },
  },
};
