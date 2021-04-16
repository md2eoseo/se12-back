import client from '../../client';

export default {
  Query: {
    seeBanners: async () => {
      try {
        const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
        const currentDate = new Date();
        const koreanDate = new Date(currentDate.getTime() + KR_TIME_DIFF);
        const banners = await client.banner.findMany({
          where: { AND: [{ startDate: { lte: koreanDate } }, { endDate: { gte: koreanDate } }, { activate: true }] },
          orderBy: { startDate: 'desc' },
        });
        return { ok: true, banners };
      } catch (error) {
        return { ok: false, error };
      }
    },
  },
};
