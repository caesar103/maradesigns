<script setup lang="ts">
const projects = [
  {
    title: 'Modern Apartment Staging',
    description: 'A complete staging for a downtown apartment, focusing on a clean, modern aesthetic to attract young professionals.',
    image: '/images/portfolio-1.webp',
    services: ['Home Staging', 'Interior Design', 'Furniture Rental']
  },
  {
    title: 'Cozy Family Home',
    description: 'Staging for a suburban family home, creating a warm and inviting atmosphere that appeals to families.',
    image: '/images/portfolio-2.webp',
    services: ['Home Staging', 'Space Planning']
  },
  {
    title: 'Luxury Villa Staging',
    description: 'High-end staging for a luxury villa, showcasing the property\'s elegance and maximizing its market value.',
    image: '/images/portfolio-3.webp',
    services: ['Home Staging', 'Luxury Furniture Rental', 'Art Curation']
  },
  {
    title: 'Commercial Office Space',
    description: 'Staging for a commercial office space to help potential tenants visualize a productive and stylish work environment.',
    image: '/images/portfolio-4.webp',
    services: ['Commercial Staging', 'Space Planning']
  },
  {
    title: 'Vacation Rental Staging',
    description: 'Staging for a vacation rental property, designed to increase bookings and guest satisfaction.',
    image: '/images/portfolio-5.webp',
    services: ['Home Staging', 'Furniture Rental', 'Photography Styling']
  },
  {
    title: 'Minimalist Condo Staging',
    description: 'A minimalist approach to staging a small condo, making the space feel larger and more open.',
    image: '/images/portfolio-6.webp',
    services: ['Home Staging', 'Decluttering', 'Furniture Rental']
  }
]
</script>

<template>
  <div class="container mx-auto px-4 py-12">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-800 mb-4">Our Portfolio</h1>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">
        Take a look at some of our recent projects. We take pride in our ability to transform any space into a beautiful and inviting home.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
          v-for="project in projects"
          :key="project.title"
          class="bg-white rounded-lg shadow-lg overflow-hidden"
      >
        <NuxtImg :src="project.image" :alt="project.title" class="w-full h-56 object-cover" />
        <div class="p-6">
          <h3 class="text-xl font-bold text-gray-800 mb-2">{{ project.title }}</h3>
          <p class="text-gray-600 mb-4">{{ project.description }}</p>
          <div class="flex flex-wrap gap-2">
            <span
                v-for="service in project.services"
                :key="service"
                class="bg-gray-200 text-gray-700 text-xs font-semibold px-2.5 py-1 rounded-full"
            >
              {{ service }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>