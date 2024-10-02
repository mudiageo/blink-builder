import prisma from './prisma'

export const followCreator = async(followerId: string, creatorId: string): Promise<boolean> => {
  try {
    await prisma.follow.create({
      data: {
        followerId,
        creatorId,
      },
    });
    return true;
  } catch (error) {
    console.error('Error following creator:', error);
    return false;
  }
}

export const unfollowCreator = async(followerId: string, creatorId: string): Promise<boolean> => {
  try {
    await prisma.follow.delete({
      where: {
        followerId_creatorId: {
          followerId,
          creatorId,
        },
      },
    });
    return true;
  } catch (error) {
    console.error('Error unfollowing creator:', error);
    return false;
  }
}

export const shareBlink = (blinkId: string, platform: string): string => {
  const shareUrl = `https://yourdomain.com/blinks/${blinkId}`;
  
  switch (platform) {
    case 'twitter':
      return `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`;
    case 'facebook':
      return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    default:
      return shareUrl;
  }
}