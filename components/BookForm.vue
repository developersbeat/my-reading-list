<template>
  <UCard class="p-6 shadow-md">
    <UForm :state="form" @submit.prevent="submit" class="space-y-5">
      <!-- Book Title Input Field -->
      <div>
        <label for="title" class="block text-md font-medium text-[#ffffff] mb-1">Title</label>
        <UInput
          id="title"
          v-model="form.title"
          placeholder="e.g. Atomic Habits"
          required
          class="w-[100%]"
        />
      </div>

      <!-- Author Input Field -->
      <div>
        <label for="author" class="block text-md font-medium text-[#ffffff] mb-1">Author</label>
        <UInput
          id="author"
          v-model="form.author"
          placeholder="e.g. James Clear"
          required
          class="w-[100%]"
        />
      </div>

      <UButton
        type="submit"
        block
        icon="i-heroicons-plus-circle"
        color="primary"
      >
        Add Book
      </UButton>
    </UForm>
  </UCard>
</template>

<script setup>
import { reactive } from 'vue'

const emit = defineEmits(['added'])

const form = reactive({
  title: '',
  author: ''
})

const submit = async () => {
  await $fetch('/api/books', {
    method: 'POST',
    body: {
      title: form.title,
      author: form.author
    }
  })

  form.title = ''
  form.author = ''
  emit('added')
}
</script>
