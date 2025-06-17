<template>
  <UCard>
    <div class="flex justify-between items-center">
      <div>
        <p class="font-bold">{{ book.title }}</p>
        <p class="text-sm text-gray-500">{{ book.author }}</p>
      </div>
      <div class="flex items-center gap-2">
        <UToggle v-model="localStatus" @change="toggleStatus" />
        <UButton icon="i-heroicons-trash" color="red" variant="ghost" @click="deleteBook" />
      </div>
    </div>
  </UCard>
</template>

<script setup>
const props = defineProps(['book', 'onUpdate', 'onDelete']);
const localStatus = ref(!!props.book.is_read);

const toggleStatus = async () => {
  await $fetch(`/api/books/${props.book.id}`, {
    method: 'PUT',
    body: { is_read: localStatus.value ? 1 : 0 },
  });
  props.onUpdate();
};

const deleteBook = async () => {
  await $fetch(`/api/books/${props.book.id}`, { method: 'DELETE' });
  props.onDelete();
};
</script>
