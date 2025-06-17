<template>
  <div class="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto space-y-8">
      <!-- App Header -->
      <header class="flex justify-between items-center border-b pb-4">
        <h1 class="text-3xl font-bold text-gray-800">📚 My Reading List</h1>

        <div>
          <UButton
            v-if="route.path === '/'"
            to="/add-book"
            icon="i-heroicons-plus"
            color="primary"
          >
            Add Book
          </UButton>

          <UButton
            v-else
            to="/"
            icon="i-heroicons-arrow-left"
            variant="outline"
            color="gray"
          >
            Back to List
          </UButton>
        </div>
      </header>

      <!-- Page Content -->
      <main>
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
