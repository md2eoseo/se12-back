import { Role } from '.prisma/client';
import client from '../../client';
import { uploadMultipleToS3 } from '../../shared/shared.utils';
import { protectedResolver } from '../../users/users.utils';

const resolverFn = async (
  _,
  { categoryId, name, price, stock, imgUrl, author, contents, publisher, pressDate, activate },
  { loggedInUser }
) => {
  try {
    if (loggedInUser.role !== Role.ADMIN) {
      return { ok: false, error: '관리자만 접근할 수 있습니다.' };
    }
    const trimmedName = name.trim();
    if (trimmedName === '') {
      return { ok: false, error: '상품 이름을 입력해주세요.' };
    }
    if (price < 0) {
      return { ok: false, error: '상품 가격이 유효하지 않습니다.' };
    }
    if (stock < 0) {
      return { ok: false, error: '상품 재고량이 유효하지 않습니다.' };
    }
    let imgUrlFromS3;
    if (imgUrl) {
      imgUrlFromS3 = await uploadMultipleToS3(imgUrl, loggedInUser.id, 'item');
    }
    await client.item.create({
      data: {
        categoryId,
        name: trimmedName,
        price,
        stock,
        imgUrl: imgUrlFromS3,
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
