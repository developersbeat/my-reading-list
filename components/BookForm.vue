<template>
  <UCard>
    <UForm @submit.prevent="submit">
      <UFormGroup label="Title" class="mb-4">
        <UInput v-model="title" required />
      </UFormGroup>
      <UFormGroup label="Author" class="mb-4">
        <UInput v-model="author" required />
      </UFormGroup>
      <UButton type="submit" block>Add Book</UButton>
    </UForm>
  </UCard>
</template>

<script setup>
const emit = defineEmits(['added']);
const title = ref('');
const author = ref('');

const submit = async () => {
  await $fetch('/api/books', {
    method: 'POST',
    body: { title: title.value, author: author.value },
  });
  title.value = '';
  author.value = '';
  emit('added');
};
</script>
