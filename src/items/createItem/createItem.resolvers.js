import { Role } from '.prisma/client';
import client from '../../client';
import { protectedResolver } from '../../users/users.utils';

const resolverFn = async (_, { categoryId, name, price, imgUrl, author, contents, publisher, pressDate, activate }, { loggedInUser }) => {
  try {
    if (loggedInUser.role !== Role.ADMIN) {
      return { ok: false, error: '관리자만 접근할 수 있습니다.' };
    }
    await client.item.create({
      data: {
        categoryId,
        name,
        price,
        imgUrl,
        author,
        contents,
        publisher,
        pressDate,
        activate,
      },
    });
    return { ok: true };
  } catch (error) {
    return { ok: false, error };
  }
};

export default {
  Mutation: { createItem: protectedResolver(resolverFn) },
};
