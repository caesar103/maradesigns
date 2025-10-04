<script setup lang="ts">
// Set the title and description for this page
useHead({
  title: 'Our Services | Staging Co.',
  meta: [
    { name: 'description', content: 'Explore our detailed home staging services, from initial consultation to full staging and accessory rentals.' }
  ]
})

// Easily update your service details here
const services = [
  {
    title: 'Consultation',
    image: '/images/service-consultation.jpg',
    description: 'Our process begins with a comprehensive on-site consultation. We walk through your property with you, discussing your goals, budget, and timeline. We\'ll provide a detailed report with actionable recommendations to maximize your home\'s appeal to potential buyers.',
    features: [
      'Detailed property walk-through',
      'Room-by-room action plan',
      'Color palette recommendations',
      'De-cluttering and furniture arrangement advice'
    ]
  },
  {
    title: 'Full Home Staging',
    image: '/images/service-full.jpg',
    description: 'For vacant properties, our full home staging service transforms an empty house into a warm and inviting home. We provide a complete, turn-key solution, handling everything from design to furniture delivery and final styling, creating a space that buyers will fall in love with.',
    features: [
      'Custom design plan',
      'Furniture, art, and accessory rental',
      'Professional installation and styling',
      'Coordination with real estate agents'
    ]
  },
  {
    title: 'Accessory & Art Rental',
    image: '/images/service-accessory.jpg',
    description: 'If you plan to live in your home while it\'s on the market, our accessory service is the perfect fit. We work with your existing furniture, enhancing each room with a curated selection of art, rugs, lighting, and decor to elevate the space and highlight its best features.',
    features: [
      'Integration with existing furniture',
      'Curation of high-end accessories',
      'Art selection and placement',
      'Final styling and professional photography prep'
    ]
  }
]
</script>

<template>
  <div>
    <section class="bg-slate-50 py-16 text-center">
      <div class="container mx-auto px-4">
        <h1 class="text-5xl font-bold text-primary">What We Do</h1>
        <p class="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
          We offer a tailored suite of services designed to unlock your property's true potential and secure a faster, more profitable sale.
        </p>
      </div>
    </section>

    <section class="py-16">
      <div class="container mx-auto px-4 space-y-20">
        <div
            v-for="(service, index) in services"
            :key="service.title"
            class="flex flex-col md:gap-16 items-center"
            :class="index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'"
        >
          <div class="w-full md:w-1/2 mb-8 md:mb-0">
            <NuxtImg :src="service.image" :alt="service.title" class="rounded-lg shadow-lg" />
          </div>

          <div class="w-full md:w-1/2">
            <h2 class="text-4xl font-bold text-primary">{{ service.title }}</h2>
            <p class="text-gray-600 leading-relaxed my-4">{{ service.description }}</p>
            <ul class="space-y-2">
              <li v-for="feature in service.features" :key="feature" class="flex items-center gap-3">
                <Icon name="ph:check-circle-bold" class="text-emerald-500 text-xl" />
                <span class="text-gray-700">{{ feature }}</span>
              </li>
            </ul>
            <NuxtLink to="/contact" class="mt-6 inline-block bg-secondary hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-full transition-colors">
              Get a Quote
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>