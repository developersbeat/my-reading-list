<template>
  <div class="max-w-xl mx-auto space-y-6">
    <!-- Heading -->
    <div class="text-center">
      <h2 class="text-2xl font-bold text-[#ffffff]">Add a New Book</h2>
      <p class="text-sm text-[#ffffff]/50 mt-1">Just title and author — we’ll handle the rest.</p>
    </div>

    <!-- Form -->
    <BookForm @added="handleAdded" />
  </div>
</template>

<script setup>
import BookForm from '@/components/BookForm.vue'
import { useRouter } from 'vue-router'
import { useToast } from '#imports'

const router = useRouter()
const toast = useToast()

const handleAdded = () => {
  toast.add({ title: 'Book added successfully!' })
  router.push('/')
}
</script>
