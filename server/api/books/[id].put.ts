import { getDb } from '@/server/utils/db';

export default defineEventHandler(async (event) => {
  const id = Number(getRouterParam(event, 'id'));
  const { is_read } = await readBody(event);
  const db = await getDb();
  await db.run('UPDATE books SET is_read = ? WHERE id = ?', [is_read, id]);
  return { success: true };
});
