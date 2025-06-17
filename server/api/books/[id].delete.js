// File: server/api/books/[id].delete.ts

import { createError, getRouterParam } from 'h3';

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id');
    if (!id) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Book ID is required'
      });
    }

    const db = await getDb();
    const result = await db.run('DELETE FROM books WHERE id = ?', id);

    if (result.changes === 0) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Book not found'
      });
    }

    return { success: true };
  } catch (err) {
    throw createError({
      statusCode: err.statusCode || 500,
      statusMessage: err.statusMessage || 'Failed to delete book'
    });
  }
});
