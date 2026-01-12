<script setup lang="ts">
const socials = [
  { name: 'mdi:facebook', to: 'https://facebook.com' },
  { name: 'mdi:instagram', to: 'https://instagram.com' },
  { name: 'mdi:linkedin', to: 'https://linkedin.com' }
]
</script>

<template>
  <footer class="bg-primary text-white">
    <div class="container mx-auto px-4 py-8 flex flex-col sm:flex-row justify-between items-center gap-6">
      <NuxtLink to="/public" class="flex items-center gap-2">
        <Icon name="ph:paint-brush-broad-duotone" class="w-8 h-8" />
        <span class="font-bold text-xl font-luxury">Mara Designs</span>
      </NuxtLink>

      <div class="flex gap-4">
        <NuxtLink
            v-for="social in socials"
            :key="social.name"
            :to="social.to"
            target="_blank"
            class="text-white/80 hover:text-white transition-colors"
        >
          <Icon :name="social.name" class="w-6 h-6" />
        </NuxtLink>
      </div>
    </div>

    <div class="container mx-auto px-4 py-4 border-t border-white/20 text-center text-sm text-gray-300">
      &copy; {{ new Date().getFullYear() }} Mara Designs. All Rights Reserved.
    </div>
  </footer>
</template>