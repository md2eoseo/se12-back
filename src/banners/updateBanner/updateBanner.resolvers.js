import { Role } from '@prisma/client';
import client from '../../client';
import { uploadToS3 } from '../../shared/shared.utils';
import { protectedResolver } from '../../users/users.utils';

const resolverFn = async (_, { id, category, imgUrl, title, contents, startDate, endDate, activate }, { loggedInUser }) => {
  try {
    if (loggedInUser.role !== Role.ADMIN) {
      return { ok: false, error: '관리자만 접근할 수 있습니다.' };
    }
    const trimmedTitle = title.trim();
    if (trimmedTitle === '') {
      return { ok: false, error: '제목을 입력해주세요.' };
    }
    const banner = await client.banner.findUnique({ where: { id } });
    if (startDate && endDate) {
      if (endDate < startDate) {
        return { ok: false, error: '유효한 기간 설정을 해주세요.' };
      }
    } else if (endDate) {
      if (endDate < banner.startDate) {
        return { ok: false, error: '유효한 기간 설정을 해주세요.' };
      }
    } else if (startDate) {
      if (banner.endDate < startDate) {
        return { ok: false, error: '유효한 기간 설정을 해주세요.' };
      }
    }
    let imgUrlFromS3;
    if (imgUrl) {
      imgUrlFromS3 = await uploadToS3(imgUrl, loggedInUser.id, 'banner');
    }
    const updateSuccess = await client.banner.update({
      where: { id },
      data: { category, imgUrl: imgUrlFromS3, title: trimmedTitle, contents, startDate, endDate, activate },
    });
    if (!updateSuccess) {
      return { ok: false, error: '배너 수정 실패!' };
    }
    return { ok: true };
  } catch (error) {
    return { ok: false, error };
  }
};

export default {
  Mutation: { updateBanner: protectedResolver(resolverFn) },
};
