import { Role } from '@prisma/client';
import client from '../../client';
import { uploadToS3 } from '../../shared/shared.utils';
import { protectedResolver } from '../../users/users.utils';

const resolverFn = async (_, { imgUrl, title, contents, category, startDate, endDate }, { loggedInUser }) => {
  try {
    if (loggedInUser.role !== Role.ADMIN) {
      return { ok: false, error: '관리자만 접근할 수 있습니다.' };
    }
    const trimmedTitle = title.trim();
    if (trimmedTitle === '') {
      return { ok: false, error: '제목을 입력해주세요.' };
    }
    if (endDate < startDate) {
      return { ok: false, error: '유효한 기간 설정을 해주세요.' };
    }
    let imgUrlFromS3;
    if (imgUrl) {
      imgUrlFromS3 = await uploadToS3(imgUrl, loggedInUser.id, 'banner');
    }
    await client.banner.create({
      data: { category, imgUrl: imgUrlFromS3, title: trimmedTitle, contents, startDate, endDate },
    });
    return { ok: true };
  } catch (error) {
    return { ok: false, error };
  }
};

export default {
  Mutation: { createBanner: protectedResolver(resolverFn) },
};
