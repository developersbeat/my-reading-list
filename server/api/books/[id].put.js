//server/api/books/[id].put.js

import { getDb } from '@/server/utils/db'
import { getRouterParam, readBody, createError } from 'h3'

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    const { is_read } = await readBody(event)

    if (typeof is_read !== 'number') {
      throw createError({
        statusCode: 400,
        statusMessage: 'Invalid or missing is_read value'
      })
    }

    const db = await getDb()
    await db.run('UPDATE books SET is_read = ? WHERE id = ?', [is_read, id])
    return { success: true }
  } catch (err) {
    throw createError({
      statusCode: err.statusCode || 500,
      statusMessage: err.message || 'Failed to update book status'
    })
  }
})
