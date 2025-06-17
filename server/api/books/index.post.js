
import { getDb } from '@/server/utils/db';
import { readBody, createError } from 'h3';

export default defineEventHandler(async (event) => {
  try {
    const { title, author } = await readBody(event);

    if (!title || !author) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Both title and author are required.',
      });
    }

    const db = await getDb();
    await db.run('INSERT INTO books (title, author) VALUES (?, ?)', [title, author]);

    return { success: true };
  } catch (err) {
    console.error('[POST /api/books] Error:', err);
    throw createError({
      statusCode: err.statusCode || 500,
      statusMessage: err.statusMessage || 'Failed to add book.',
    });
  }
});
