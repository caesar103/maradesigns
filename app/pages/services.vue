<script setup lang="ts">
const services = [
  {
    icon: 'ph:house-line-duotone',
    title: 'Home Staging',
    description: 'We prepare your home for sale, ensuring it looks its best to attract potential buyers.'
  },
  {
    icon: 'ph:paint-brush-broad-duotone',
    title: 'Interior Design',
    description: 'Our team of experts will help you create a beautiful and functional living space.'
  },
  {
    icon: 'ph:selection-all-duotone',
    title: 'Space Planning',
    description: 'We optimize your space to improve flow, functionality, and overall aesthetics.'
  },
  {
    icon: 'ph:palette-duotone',
    title: 'Color Consultation',
    description: 'Our color experts will help you choose the perfect palette for your home.'
  },
  {
    icon: 'ph:couch-duotone',
    title: 'Furniture Rental',
    description: 'We offer a wide range of furniture rentals to suit any style and budget.'
  },
  {
    icon: 'ph:lightbulb-duotone',
    title: 'Lighting Design',
    description: 'We create lighting plans that enhance the mood and functionality of your space.'
  }
]
</script>

<template>
  <div class="container mx-auto px-4 py-16">
    <h1 class="text-4xl font-bold text-center text-gray-800 mb-2">Our Services</h1>
    <p class="text-lg text-gray-600 text-center mb-12">
      We offer a wide range of services to help you create the home of your dreams.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ServiceCard
        v-for="service in services"
        :key="service.title"
        :icon="service.icon"
        :title="service.title"
        :description="service.description"
      />
    </div>
  </div>
</template>

<style scoped>

</style>