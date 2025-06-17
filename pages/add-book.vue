<template>
  <div class="max-w-xl mx-auto space-y-6">
    <div class="text-center">
      <h2 class="text-2xl font-bold text-[#ffffff]">Add a New Book</h2>
      <p class="text-sm text-[#ffffff]/50 mt-1">Just title and author — we’ll handle the rest.</p>
    </div>

    <!-- Form component to add a book-->
    <BookForm @added="handleAdded" />
  </div>
</template>

<script setup>
import BookForm from '@/components/BookForm.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const handleAdded = () => {
  router.push('/')
}
</script>
