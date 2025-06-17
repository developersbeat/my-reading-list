import { getDb } from '@/server/utils/db';

export default defineEventHandler(async (event) => {
  const id = Number(getRouterParam(event, 'id'));
  const db = await getDb();
  await db.run('DELETE FROM books WHERE id = ?', [id]);
  return { success: true };
});
