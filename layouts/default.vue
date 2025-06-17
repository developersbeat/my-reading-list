<!-- //ayouts/default.vue -->

<template>
    <div
      class="min-h-screen py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1b243a] via-[#2f3b5a] via-60% to-[#1E2129]"
    >
      <div class="max-w-4xl mx-auto space-y-8">
        <header class="flex justify-between items-center border-b pb-4">
          <h1 class="text-3xl font-bold text-white-800">My Reading List</h1>

          <div>
            <UButton
              v-if="route.path === '/'"
              to="/add-book"
              icon="i-heroicons-plus"
              class="bg-[#455171b5] text-white py-2 rounded-lg hover:bg-[#455171b5]/85 transition cusror-pointer disabled:opacity-50 disabled:cursor-not-allowed"
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
          <NuxtPage />
        </main>
      </div>
    </div>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>
