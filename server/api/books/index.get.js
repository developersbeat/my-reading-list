//server/api/books/index.get.js

import { getDb } from '@/server/utils/db';
import { createError } from 'h3';

export default defineEventHandler(async () => {
  try {
    const db = await getDb();
    const books = await db.all('SELECT * FROM books');
    return books;
  } catch (err) {
    console.error('[GET /api/books] Error fetching books:', err);

    // Send structured error to client
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch books from database.',
    });
  }
});
