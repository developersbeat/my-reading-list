<template>
  <UCard class="shadow-md hover:shadow-lg transition-all duration-200">
    <div class="flex justify-between items-center">
      <!-- Left: Book Info -->
      <div>
        <p class="text-lg font-semibold text-gray-800">{{ book.title }}</p>
        <p class="text-sm text-gray-500">{{ book.author }}</p>
        <p class="text-xs mt-1" :class="status ? 'text-green-600' : 'text-yellow-500'">
          {{ status ? '✔ Read' : '📖 Unread' }}
        </p>
      </div>

      <!-- Right: Actions -->
      <div class="flex items-center gap-3">
        <!-- Nuxt UI Toggle (as Switch) -->
        <USwitch
          v-model="status"
          @change="toggleStatus"
          color="primary"
          size="sm"
          on-icon="i-heroicons-check"
          off-icon="i-heroicons-book-open"
          aria-label="Toggle read status"
        />

        <!-- Nuxt UI Trash Button with Tooltip -->
        <UTooltip text="Delete Book">
          <UButton
            icon="i-heroicons-trash"
            size="sm"
            color="red"
            variant="ghost"
            @click="deleteBook"
            aria-label="Delete book"
          />
        </UTooltip>
      </div>
    </div>
  </UCard>
</template>

<script setup>
const props = defineProps(['book', 'onUpdate', 'onDelete'])
const status = ref(!!props.book.is_read)

const toggleStatus = async () => {
  await $fetch(`/api/books/${props.book.id}`, {
    method: 'PUT',
    body: { is_read: status.value ? 1 : 0 }
  })
  props.onUpdate()
}

const deleteBook = async () => {
  await $fetch(`/api/books/${props.book.id}`, {
    method: 'DELETE'
  })
  props.onDelete()
}
</script>
