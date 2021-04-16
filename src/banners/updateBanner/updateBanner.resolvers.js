import { Role } from '@prisma/client';
import client from '../../client';
import { protectedResolver } from '../../users/users.utils';

const resolverFn = async (_, { id, category, banner, title, contents, startDate, endDate }, { loggedInUser }) => {
  try {
    if (loggedInUser.role !== Role.ADMIN) {
      return { ok: false, error: '관리자만 접근할 수 있습니다.' };
    }
    const updateSuccess = await client.banner.update({
      where: { id },
      data: { category, banner, title, contents, startDate, endDate },
    });
    if (!updateSuccess) {
      return { ok: false, error: '배너 수정 실패!' };
    }
    return { ok: true };
  } catch (error) {
    return { ok: false, error };
  }
};

export default {
  Mutation: { updateBanner: protectedResolver(resolverFn) },
};
