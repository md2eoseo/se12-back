import client from '../../client';

export default {
  Mutation: {
    createItem: async (_, { title, author, price, contents, category, publisher, isbn, pressDate, activate }) => {
      try {
        const exist = await client.item.findFirst({
          where: { isbn },
        });

        if (exist) {
          return {
            ok: false,
            error: '존재하는 isbn 입니다.',
          };
        }

        await client.item.create({
          data: {
            title,
            author,
            price,
            contents,
            category,
            publisher,
            isbn,
            pressDate,
            activate,
          },
        });
        return { ok: true };
      } catch (error) {
        return { ok: false, error };
      }
    },
  },
};
