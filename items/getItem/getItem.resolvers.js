import { Prisma } from '.prisma/client';
import { transformDocument } from '@prisma/client/runtime';
import { introspectionFromSchema } from 'graphql';
import client from '../../client';

export default {
  Query: {
    getItem_title: async (_, { title }) => {
      try {
        const item = await client.item.findMany({
          where: {
            title,
            activate: true,
          },
        });
        if (item != '') {
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
        const item = await client.item.findMany({
          where: {
            author,
            activate: true,
          },
        });
        if (item != '') {
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
