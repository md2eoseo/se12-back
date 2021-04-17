import { Role } from '.prisma/client';
import client from '../../client';
import { protectedResolver } from '../../users/users.utils';

const PAGE_SIZE = 20;
const resolverFn = async (_, { term, sortMethod, minPrice, maxPrice, lastId }, { loggedInUser }) => {
  try {
    if (loggedInUser.role !== Role.ADMIN) {
      return { ok: false, error: '관리자만 접근할 수 있습니다.' };
    }
    const items = await client.item.findMany({
      where: {
        AND: [{ name: { contains: term } }, { price: { gte: minPrice } }, { price: { lte: maxPrice } }],
      },
      // TODO: 'PRICE_LOW' => SortMethod.PRICE_LOW
      orderBy: [...(sortMethod && [{ price: sortMethod === 'PRICE_LOW' ? 'asc' : 'desc' }]), { createdAt: 'desc' }],
      take: PAGE_SIZE,
      skip: lastId ? 1 : 0,
      ...(lastId && { cursor: { id: lastId } }),
    });
    let lastItemId = null;
    if (!items) {
      lastItemId = items[items.length - 1].id;
    }
    return { ok: true, items, lastId: lastItemId };
  } catch (error) {
    return { ok: false, error };
  }
};

export default {
  Query: {
    getItems: protectedResolver(resolverFn),
  },
};
