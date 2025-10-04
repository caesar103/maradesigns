<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  description: string
}>()
</script>

<template>
  <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <Icon :name="icon" class="w-12 h-12 text-primary mb-4" />
    <h3 class="text-xl font-bold text-gray-800 mb-2">{{ title }}</h3>
    <p class="text-gray-600">{{ description }}</p>
  </div>
</template>