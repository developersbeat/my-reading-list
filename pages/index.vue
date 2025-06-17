<template>
  <div class="space-y-4">
    <!-- Empty State -->
    <div
      v-if="books.length === 0"
      class="text-center text-gray-400 text-sm mt-12"
    >
      No books yet. Click "Add Book" to get started!
    </div>

    <!-- Book List -->
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
import { ref, onMounted } from 'vue'
import BookCard from '@/components/BookCard.vue'

const books = ref([])

const fetchBooks = async () => {
  try {
    books.value = await $fetch('/api/books')
  } catch (err) {
    console.error('Error fetching books:', err)
  }
}

onMounted(fetchBooks)
</script>
