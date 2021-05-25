import client from '../../client';

export default {
  Mutation: {
    deleteBagItem: async (_, { id }, { loggedInUser }) => {
      try {
        const bagItem = await client.bagItem.findUnique({ where: { id } });
        if (!bagItem) {
          return { ok: false, error: '장바구니 상품이 존재하지 않습니다.' };
        }
        if (bagItem.userId !== loggedInUser.id) {
          return { ok: false, error: '다른 사용자의 장바구니 상품을 삭제할 수 없습니다.' };
        }
        await client.bagItem.delete({ where: { id } });
        return { ok: true };
      } catch (error) {
        return { ok: false, error };
      }
    },
  },
};
