import client from '../client';

export default {
  User: {
    totalBagItems: ({ id }) =>
      client.bagItem.count({
        where: { userId: id },
      }),
  },
};
