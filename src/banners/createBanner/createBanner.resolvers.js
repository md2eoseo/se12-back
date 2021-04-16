import { Role } from '@prisma/client';
import client from '../../client';
import { protectedResolver } from '../../users/users.utils';

const resolverFn = async (_, { category, banner, title, contents, startDate, endDate }, { loggedInUser }) => {
  try {
    if (loggedInUser.role !== Role.ADMIN) {
      return { ok: false, error: '관리자만 접근할 수 있습니다.' };
    }
    await client.banner.create({
      data: { category, banner, title, contents, startDate, endDate },
    });
    return { ok: true };
  } catch (error) {
    return { ok: false, error };
  }
};

export default {
  Mutation: { createBanner: protectedResolver(resolverFn) },
};
