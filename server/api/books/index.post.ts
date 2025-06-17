import { getDb } from '@/server/utils/db';

export default defineEventHandler(async (event) => {
  const { title, author } = await readBody(event);
  const db = await getDb();
  await db.run('INSERT INTO books (title, author) VALUES (?, ?)', [title, author]);
  return { success: true };
});
