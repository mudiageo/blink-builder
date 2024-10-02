import { json } from '@sveltejs/kit';
import prisma from '$lib/prisma';

export const GET = async () => {
  try {
    const templates = await prisma.template.findMany();
    return json(templates);
  } catch (error) {
    console.error('Error fetching templates:', error);
    return json({ error: 'Failed to fetch templates' }, { status: 500 });
  }
}

export const POST = async ({ request }) => {
  const { name, description, fields } = await request.json();

  try {
    const template = await prisma.template.create({
      data: {
        name,
        description,
        config
      }
    });

    return json(template);
  } catch (error) {
    console.error('Error creating template:', error);
    return json({ error: 'Failed to create template' }, { status: 500 });
  }
}