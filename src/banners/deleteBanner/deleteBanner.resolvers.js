import { Role } from '@prisma/client';
import client from '../../client';
import { protectedResolver } from '../../users/users.utils';

const resolverFn = async (_, { id }, { loggedInUser }) => {
  try {
    if (loggedInUser.role !== Role.ADMIN) {
      return { ok: false, error: '관리자만 접근할 수 있습니다.' };
    }
    const banner = await client.banner.findUnique({ where: { id } });
    if (!banner) {
      return { ok: false, error: '해당 배너가 없습니다.' };
    }
    await client.banner.delete({ where: { id } });
    return { ok: true };
  } catch (error) {
    return { ok: false, error };
  }
};

export default {
  Mutation: { deleteBanner: protectedResolver(resolverFn) },
};
