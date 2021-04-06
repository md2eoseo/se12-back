import client from '../../client';

export default {
  Mutation: {
    createItem: async (_, { title, author, price, contents, category, publisher, isbn, pressDate, activate }) => {
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
    },
  },
};
