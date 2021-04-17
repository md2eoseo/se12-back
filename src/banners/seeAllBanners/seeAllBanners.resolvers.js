import { Role } from '@prisma/client';
import client from '../../client';
import { protectedResolver } from '../../users/users.utils';

const resolverFn = async (_, __, { loggedInUser }) => {
  try {
    if (loggedInUser.role !== Role.ADMIN) {
      return { ok: false, error: '관리자만 접근할 수 있습니다.' };
    }
    const banners = await client.banner.findMany({ orderBy: { createdAt: 'desc' } });
    return { ok: true, banners };
  } catch (error) {
    return { ok: false, error };
  }
};

export default {
  Query: { seeAllBanners: protectedResolver(resolverFn) },
};
