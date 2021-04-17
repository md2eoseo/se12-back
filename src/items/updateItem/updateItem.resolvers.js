import { Role } from '@prisma/client';
import client from '../../client';
import { protectedResolver } from '../../users/users.utils';

const resolverFn = async (
  _,
  { id, categoryId, name, price, imgUrl, author, contents, publisher, pressDate, activate },
  { loggedInUser }
) => {
  try {
    if (loggedInUser.role !== Role.ADMIN) {
      return { ok: false, error: '관리자만 접근할 수 있습니다.' };
    }
    const updateSuccess = await client.item.update({
      where: { id },
      data: { categoryId, name, price, imgUrl, author, contents, publisher, pressDate, activate },
    });
    if (!updateSuccess) {
      return { ok: false, error: '상품 수정 실패!' };
    }
    return { ok: true };
  } catch (error) {
    return { ok: false, error };
  }
};

export default {
  Mutation: { updateItem: protectedResolver(resolverFn) },
};
