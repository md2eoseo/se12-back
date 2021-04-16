import jwt from 'jsonwebtoken';
import client from '../client';

export const getLoggedInUser = async token => {
  try {
    if (!token) {
      return null;
    }
    const { id } = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const user = await client.user.findUnique({ where: { id } });
    if (!user) {
      return null;
    }
    return user;
  } catch (error) {
    return null;
  }
};

export function protectedResolver(ourResolver) {
  return function (root, args, context, info) {
    if (!context.loggedInUser) {
      return { ok: false, error: '접근 권한이 없음!' };
    }
    return ourResolver(root, args, context, info);
  };
}
