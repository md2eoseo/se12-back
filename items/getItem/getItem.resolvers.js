import client from '../../client';

export default {
  Query: {
    getItem_title: async (_, { title }) => {
      try {
        const item = await client.item.findFirst({
          where: {
            title,
            activate: true,
          },
        });
        if (!item) {
          return { ok: true, item };
        } else {
          return { ok: false, error: '찾고자 하는 책이 없습니다.' };
        }
      } catch (error) {
        return { ok: false, error };
      }
    },

    getItem_author: async (_, { author }) => {
      try {
        const item = await client.item.findFirst({
          where: {
            author,
            activate: true,
          },
        });
        if (!item) {
          return { ok: true, item };
        } else {
          return { ok: false, error: '찾고자 하는 책이 없습니다.' };
        }
      } catch (error) {
        return { ok: false, error };
      }
    },

    getItem_category: async (_, { category }) => {
      try {
        const item = await client.item.findFirst({
          where: {
            category,
            activate: true,
          },
        });
        if (!item) {
          return { ok: true, item };
        } else {
          return { ok: false, error: '찾고자 하는 책이 없습니다.' };
        }
      } catch (error) {
        return { ok: false, error };
      }
    },

    getItem_publisher: async (_, { publisher }) => {
      try {
        const item = await client.item.findFirst({
          where: {
            publisher,
            activate: true,
          },
        });
        if (!item) {
          return { ok: true, item };
        } else {
          return { ok: false, error: '찾고자 하는 책이 없습니다.' };
        }
      } catch (error) {
        return { ok: false, error };
      }
    },

    getItem_isbn: async (_, { isbn }) => {
      try {
        const item = await client.item.findFirst({
          where: {
            isbn,
            activate: true,
          },
        });
        if (!item) {
          return { ok: true, item };
        } else {
          return { ok: false, error: '찾고자 하는 책이 없습니다.' };
        }
      } catch (error) {
        return { ok: false, error };
      }
    },
  },
};
