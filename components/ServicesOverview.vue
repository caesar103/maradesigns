<script setup lang="ts">
const services = [
  {
    icon: 'ph:house-line-bold',
    title: 'Consultation',
    description: 'We start with a detailed consultation to understand your goals and assess the property\'s potential.'
  },
  {
    icon: 'ph:couch-bold',
    title: 'Full Home Staging',
    description: 'We furnish and style a vacant property from top to bottom to create a universally appealing look.'
  },
  {
    icon: 'ph:paint-brush-broad-bold',
    title: 'Accessory & Art Rental',
    description: 'Using your existing furniture, we enhance the space with curated art, lighting, and accessories.'
  }
]
</script>

<template>
  <section class="py-16">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-primary font-serif">Our Services</h2>
        <p class="text-lg text-gray-600 mt-2">Everything you need to make your property shine.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        <div v-for="service in services" :key="service.title">
          <div class="bg-secondary text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto">
            <Icon :name="service.icon" class="w-10 h-10" />
          </div>
          <h3 class="text-2xl font-bold text-primary mt-6 mb-2 font-serif">{{ service.title }}</h3>
          <p class="text-gray-600">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>