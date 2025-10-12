<script setup lang="ts">
import { ref, computed } from 'vue'

// Set the title and description for this page
useHead({
  title: 'Our Portfolio | Staging Co.',
  meta: [
    { name: 'description', content: 'Browse our full portfolio of successfully staged homes and design projects.' }
  ]
})

// We use the same data and filtering logic as the homepage section
const portfolioItems = ref([
  { id: 1, title: 'Modern Downtown Condo', category: 'Living Room', type: 'image', thumbnailUrl: '/images/IMG-20251004-WA0015.jpg' },
  { id: 2, title: 'Suburban Family Home', category: 'Kitchen', type: 'image', thumbnailUrl: '/images/Deck.jpg' },
  { id: 3, title: 'Luxury Villa Walkthrough', category: 'Full Home', type: 'video', thumbnailUrl: '/images/IMG-20251004-WA0014.jpg', mediaUrl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U' },
  { id: 4, title: 'Cozy Bedroom Refresh', category: 'Bedroom', type: 'image', thumbnailUrl: '/images/IMG-20251004-WA0017.jpg' },
  { id: 5, title: 'Open Concept Kitchen', category: 'Kitchen', type: 'image', thumbnailUrl: '/images/IMG-20251004-WA0019.jpg' },
  { id: 6, title: 'Bright Living Space', category: 'Living Room', type: 'image', thumbnailUrl: '/images/IMG-20251004-WA0009.jpg' },
])

const filters = ['All', 'Living Room', 'Kitchen', 'Bedroom', 'Full Home']
const activeFilter = ref('All')

const filteredItems = computed(() => {
  if (activeFilter.value === 'All') {
    return portfolioItems.value
  }
  return portfolioItems.value.filter(item => item.category === activeFilter.value)
})

function setFilter(filter: string) {
  activeFilter.value = filter
}
</script>

<template>
  <div>
    <section class="bg-slate-50 py-16 text-center">
      <div class="container mx-auto px-4">
        <h1 class="text-5xl font-bold text-primary">Our Portfolio</h1>
        <p class="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
          Browse our curated collection of transformations. Each project showcases our commitment to quality, style, and creating irresistible spaces.
        </p>
      </div>
    </section>

    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="flex justify-center flex-wrap gap-4 mb-12">
          <button
              v-for="filter in filters"
              :key="filter"
              @click="setFilter(filter)"
              :class="[
              'px-6 py-2 rounded-full font-semibold transition-colors',
              activeFilter === filter
                ? 'bg-primary text-white'
                : 'bg-white text-gray-700 hover:bg-primary/10'
            ]"
          >
            {{ filter }}
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <NuxtLink
              v-for="item in filteredItems"
              :key="item.id"
              :to="`/portfolio/${item.id}`"
              class="group relative block overflow-hidden rounded-lg shadow-lg"
          >
            <img :src="item.thumbnailUrl" :alt="item.title" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
            <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 class="text-white text-xl font-bold">{{ item.title }}</h3>
              <p class="text-accent">{{ item.category }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>