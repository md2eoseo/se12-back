import client from '../../client';

export default {
  Query: {
    seeBanner: async (_, { id }) => {
      try {
        const banner = await client.banner.findUnique({ where: { id } });
        if (!banner) {
          return { ok: false, error: '존재하지 않는 배너입니다.' };
        }
        return { ok: true, banner };
      } catch (error) {
        return { ok: false, error };
      }
    },
  },
};
