import prisma from '$lib/prisma';

  export const load = async () => {
    try {
      const popularBlinks = await prisma.blink.findMany({
        orderBy: { views: 'desc' },
        take: 20,
        include: { category: true, user: true }
      });

      const categories = await prisma.category.findMany();

      return {
        popularBlinks,
        categories
      };
    } catch (error) {
      console.error('Error loading marketplace data:', error);
      return {
        error: 'Failed to load marketplace data'
      };
    }
  }