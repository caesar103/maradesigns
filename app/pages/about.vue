<script setup lang="ts">
// Set the title and description for this page
useHead({
  title: 'About Us | Staging Co.',
  meta: [
    { name: 'description', content: 'Learn about the team and philosophy behind our home staging services.' }
  ]
})

// You can easily update your team members here
const teamMembers = [
  {
    name: 'Jane Doe',
    title: 'Founder & Lead Designer',
    image: '/images/team-jane.jpg',
    bio: 'With a passion for design and an eye for detail, Jane founded Staging Co. to help homeowners maximize their property\'s potential.'
  },
  {
    name: 'John Smith',
    title: 'Logistics Manager',
    image: '/images/team-john.jpg',
    bio: 'John ensures that every staging project runs smoothly, from furniture delivery to final setup.'
  }
]
</script>

<template>
  <div>
    <section class="bg-slate-50 py-16 text-center">
      <div class="container mx-auto px-4">
        <h1 class="text-5xl font-bold text-primary">About Staging Co.</h1>
        <p class="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
          We believe that great design doesn't just sell homes—it creates an emotional connection that inspires buyers to imagine their future.
        </p>
      </div>
    </section>

    <section class="py-16">
      <div class="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <NuxtImg
              src="/images/about-story.jpg"
              alt="Team collaborating on a design"
              class="rounded-lg shadow-lg"
          />
        </div>
        <div class="space-y-4">
          <h2 class="text-4xl font-bold text-primary">Our Story</h2>
          <p class="text-gray-600 leading-relaxed">
            Founded in 2015, Staging Co. was born from a simple idea: to help every homeowner present their property in the best possible light. We saw a need for a more personal, design-focused approach to home staging.
          </p>
          <p class="text-gray-600 leading-relaxed">
            Over the years, we've helped hundreds of clients in the New York area sell their homes faster and for higher prices. Our philosophy is to blend timeless design principles with current market trends to create spaces that feel both aspirational and welcoming.
          </p>
        </div>
      </div>
    </section>

    <section class="bg-slate-50 py-16">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-primary">Meet Our Team</h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div
              v-for="member in teamMembers"
              :key="member.name"
              class="text-center"
          >
            <NuxtImg
                :src="member.image"
                :alt="member.name"
                class="rounded-full w-40 h-40 object-cover mx-auto mb-4 shadow-md"
            />
            <h3 class="text-2xl font-bold text-primary">{{ member.name }}</h3>
            <p class="text-secondary font-semibold">{{ member.title }}</p>
            <p class="text-gray-600 mt-2">{{ member.bio }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>