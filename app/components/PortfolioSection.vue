<script setup lang="ts">
import { ref, computed } from 'vue'

// --- Data for our portfolio items ---
const portfolioItems = ref([
  {
    id: 1,
    title: 'Modern Downtown Condo',
    category: 'Living Room',
    type: 'image',
    thumbnailUrl: '/images/Deck.jpg',
  },
  {
    id: 2,
    title: 'Suburban Family Home',
    category: 'Kitchen',
    type: 'image',
    thumbnailUrl: '/images/portfolio-2.jpg',
  },
  {
    id: 3,
    title: 'Luxury Villa Walkthrough',
    category: 'Full Home',
    type: 'video', // This item is a video
    thumbnailUrl: '/images/portfolio-3.jpg',
    mediaUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' // Link to the video
  },
  {
    id: 4,
    title: 'Cozy Bedroom Refresh',
    category: 'Bedroom',
    type: 'image',
    thumbnailUrl: '/images/portfolio-4.jpg',
  },
  {
    id: 5,
    title: 'Open Concept Kitchen',
    category: 'Kitchen',
    type: 'image',
    thumbnailUrl: '/images/portfolio-5.jpg',
  },
  {
    id: 6,
    title: 'Bright Living Space',
    category: 'Living Room',
    type: 'image',
    thumbnailUrl: '/images/portfolio-6.jpg',
  },
])

// --- Filtering Logic ---
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
  <section class="bg-slate-50 py-16">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-primary">Our Work</h2>
        <p class="text-lg text-gray-600 mt-2">See how we transform properties into dream homes.</p>
      </div>

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
        <div
            v-for="item in filteredItems"
            :key="item.id"
            class="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
        >
          <img :src="item.thumbnailUrl" :alt="item.title" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />

          <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <h3 class="text-white text-xl font-bold">{{ item.title }}</h3>
            <p class="text-accent">{{ item.category }}</p>
          </div>

          <div v-if="item.type === 'video'" class="absolute inset-0 flex items-center justify-center">
            <div class="bg-white/30 backdrop-blur-sm rounded-full p-4">
              <Icon name="ph:play-fill" class="text-white w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>