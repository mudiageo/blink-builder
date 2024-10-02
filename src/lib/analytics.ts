import prisma from './prisma'

export const trackBlinkView = async(blinkId: string): Promise<void> => {
  try {
    await prisma.blinkView.create({
      data: {
        blinkId,
      },
    });
    
    // Optionally, update the views count on the Blink model
    await prisma.blink.update({
      where: { id: blinkId },
      data: { views: { increment: 1 } },
    });
  } catch (error) {
    console.error('Error tracking blink view:', error);
  }
}
export const getBlinkAnalytics = async(blinkId: string):  Promise<Record<string, number> | null => {
  try{
    const views = await prisma.blinkView.findMany({
      where: {
        blinkId,
      },
      select: {
        createdAt: true,
      },
    });

    const viewCounts = views.reduce((acc, view) => {
      const date = view.createdAt.toISOString().split('T')[0];
      acc[date] = (acc[date] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return viewCounts;
  } catch (error) {
    console.error('Error fetching blink analytics:', error);
    return null;
  }
  
}