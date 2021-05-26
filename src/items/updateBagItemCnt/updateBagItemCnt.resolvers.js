import client from '../../client';

export default {
  Mutation: {
    updateBagItemCnt: async (_, { bagItemId, quantity }, { loggedInUser }) => {
      try {
        const bagItem = await client.bagItem.findUnique({ where: { id: bagItemId }, include: { item: true } });
        if (bagItem.userId !== loggedInUser.id) {
          return { ok: false, error: '다른 사용자의 장바구니 상품을 수정할 수 없습니다.' };
        }
        if (bagItem.item.stock < bagItem.quantity + quantity) {
          return { ok: false, error: '재고가 부족합니다.' };
        }
        if (bagItem.quantity + quantity < 1) {
          return { ok: false, error: '장바구니에 담긴 상품 개수가 1개입니다.' };
        }
        await client.bagItem.update({ where: { id: bagItemId }, data: { quantity: bagItem.quantity + quantity } });
        return { ok: true, quantity: bagItem.quantity + quantity };
      } catch (error) {
        return { ok: false, error };
      }
    },
  },
};
