<template>
  <div class="space-y-4">
    <BookForm @added="fetchBooks" />

    <BookCard
      v-for="book in books"
      :key="book.id"
      :book="book"
      :onUpdate="fetchBooks"
      :onDelete="fetchBooks"
    />
  </div>
</template>

<script setup>
const books = ref([]);

const fetchBooks = async () => {
  books.value = await $fetch('/api/books');
};

onMounted(fetchBooks);
</script>
