<template>
  <div class="space-y-4">
    <!-- If no book added yet -->
    <div
      v-if="books.length === 0"
      class="text-center text-gray-400 text-sm mt-12"
    >
      No books yet. Click "Add Book" to get started!
    </div>

    <!-- Book's Cards -->
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
import { ref, onMounted } from "vue";
import BookCard from "@/components/BookCard.vue";

const books = ref([]);

const fetchBooks = async () => {
  try {
    const result = await $fetch("/api/books");
    console.log("Fetched books:", result);
    books.value = result;
  } catch (err) {
    console.error("Error fetching books:", err);
  }
};

onMounted(fetchBooks);
</script>
