import { getDb } from '@/server/utils/db';

export default defineEventHandler(async () => {
  const db = await getDb();
  const books = await db.all('SELECT * FROM books');
  return books;
});