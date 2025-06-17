//component/BookCard.vue

<template>
  <UCard
    class="shadow-md transition-all duration-200 bg-[#172237]/60 backdrop-blur-md rounded-xl border-r border-b border-white/15"
  >
    <div class="flex justify-between items-center">
      <!-- Book Info -->
      <div class="flex flex-col min-h-[6rem] space-y-1 break-words">
        <p
          class="text-2xl font-semibold text-white break-words whitespace-normal"
        >
          {{ book.title }} {{ status ? "✔" : "" }}
        </p>
        <p class="text-md text-white/80 break-words whitespace-normal">
          {{ book.author }}
        </p>
        <p
          class="text-md font-bold"
          :class="status ? 'text-green-600' : 'text-yellow-500'"
        >
          {{ status ? "Read" : "Unread" }}
        </p>
      </div>

      <!-- Actions (right side) -->
      <div class="flex items-center gap-3">
        <USwitch
          v-model="status"
          @change="toggleStatus"
          color="primary"
          size="sm"
          :on-icon="'i - heroicons - check'"
          :off-icon="'i - heroicons - book - open'"
          aria-label="Toggle read status"
        />

        <UButton
          icon="i-heroicons-trash"
          size="sm"
          color="red"
          variant="ghost"
          @click="deleteBook"
          aria-label="Delete book"
          class="cursor-pointer hover:scale-[1.1] hover:text-[#f20f0f] transition-transform duration-100"
        />
      </div>
    </div>
  </UCard>
</template>

<script setup>
const props = defineProps(["book", "onUpdate", "onDelete"]);
const status = ref(!!props.book.is_read);

const toggleStatus = async () => {
  await $fetch(`/api/books/${props.book.id}`, {
    method: "PUT",
    body: { is_read: status.value ? 1 : 0 },
  });
  props.onUpdate();
};

const deleteBook = async () => {
  await $fetch(`/api/books/${props.book.id}`, {
    method: "DELETE",
  });
  props.onDelete();
};
</script>
