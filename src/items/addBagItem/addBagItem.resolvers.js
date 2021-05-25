import client from '../../client';

export default {
  Mutation: {
    addBagItem: async (_, { itemId, quantity }, { loggedInUser }) => {
      try {
        const user = await client.user.findUnique({
          where: { id: loggedInUser.id },
          include: { bag: true },
        });
        if (!user) {
          return { ok: false, error: '존재하지 않는 사용자입니다.' };
        }

        const newItem = await client.item.findUnique({
          where: { id: itemId },
        });
        if (!newItem) {
          return { ok: false, error: '해당 상품이 존재하지 않습니다.' };
        }

        const oldBag = user.bag;
        const exist = oldBag.filter(item => item.itemId === newItem.id);
        if (exist.length !== 0) {
          return { ok: false, error: '이미 장바구니에 들어있는 상품입니다.' };
        }

        await client.bagItem.create({ data: { userId: loggedInUser.id, itemId, quantity } });
        return { ok: true };
      } catch (error) {
        return { ok: false, error };
      }
    },
  },
};
