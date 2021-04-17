import { Role } from '.prisma/client';
import client from '../../client';
import { protectedResolver } from '../../users/users.utils';

const resolverFn = async (_, { name }, { loggedInUser }) => {
  try {
    if (loggedInUser.role !== Role.ADMIN) {
      return { ok: false, error: '관리자만 접근할 수 있습니다.' };
    }
    await client.category.create({ data: { name } });
    return { ok: true };
  } catch (error) {
    return { ok: false, error };
  }
};

export default {
  Mutation: { createCategory: protectedResolver(resolverFn) },
};
