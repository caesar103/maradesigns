<script setup lang="ts">
import { ref, computed } from 'vue'

// --- Data for our portfolio items ---
const portfolioItems = ref([
  // ... (Your existing portfolio data remains the same)
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
    thumbnailUrl: '/images/IMG-20251004-WA0002.jpg',
  },
  {
    id: 3,
    title: 'Luxury Villa Walkthrough',
    category: 'Full Home',
    type: 'video',
    thumbnailUrl: '/images/IMG-20251004-WA0006.jpg',
    mediaUrl: 'https://www.youtube.com/watch?v=41qC3w3UUkU&list=RD41qC3w3UUkU&start_radio=1'
  },
  // ... (add your other items here)
])

// --- Filtering Logic (remains the same) ---
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

// --- NEW: Modal Logic ---
const selectedItem = ref<typeof portfolioItems.value[0] | null>(null)

// This computed property safely creates the YouTube embed URL
const videoEmbedUrl = computed(() => {
  if (selectedItem.value?.type === 'video' && selectedItem.value.mediaUrl) {
    // Extracts the video ID from a standard YouTube URL
    const videoId = selectedItem.value.mediaUrl.split('v=')[1]?.split('&')[0]
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`
  }
  return ''
})
</script>

<template>
  <section class="bg-slate-50 py-16">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-primary">Our Work</h2>
        <p class="text-lg text-gray-600 mt-2">See how we transform properties into dream homes.</p>
      </div>
      <div class="flex justify-center flex-wrap gap-4 mb-12">
        <button v-for="filter in filters" :key="filter" @click="setFilter(filter)" :class="['px-6 py-2 rounded-full font-semibold transition-colors', activeFilter === filter ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-primary/10']">
          {{ filter }}
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
            v-for="item in filteredItems"
            :key="item.id"
            @click="selectedItem = item"
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

  <div
      v-if="selectedItem"
      @click="selectedItem = null"
      class="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center"
  >
    <div @click.stop class="relative bg-white rounded-lg overflow-hidden shadow-2xl max-w-4xl w-full mx-4">
      <button @click="selectedItem = null" class="absolute top-2 right-2 z-10 bg-black/30 text-white rounded-full p-2 hover:bg-black/50 transition-colors">
        <Icon name="ph:x-bold" class="w-6 h-6" />
      </button>

      <div class="aspect-video">
        <img
            v-if="selectedItem.type === 'image'"
            :src="selectedItem.thumbnailUrl"
            :alt="selectedItem.title"
            class="w-full h-full object-contain"
        />
        <iframe
            v-else-if="selectedItem.type === 'video'"
            :src="videoEmbedUrl"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="w-full h-full"
        ></iframe>
      </div>

      <div class="p-4 bg-gray-50">
        <h3 class="text-xl font-bold text-primary">{{ selectedItem.title }}</h3>
        <p class="text-gray-600">{{ selectedItem.category }}</p>
      </div>
    </div>
  </div>
</template>