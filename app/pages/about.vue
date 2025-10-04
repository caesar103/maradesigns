<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-4">About Us</h1>
    <p class="text-lg mb-4">
      Welcome to our company! We are a team of passionate individuals dedicated to creating amazing products that make a difference.
    </p>
    <p class="text-lg mb-4">
      Our mission is to leverage technology to solve real-world problems and improve the lives of our users. We believe in innovation, collaboration, and a user-centric approach to everything we do.
    </p>
    <h2 class="text-3xl font-bold mt-8 mb-4">Our Team</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="text-center">
        <NuxtImg src="https://picsum.photos/seed/jules/150/150" alt="Team Member 1" class="w-32 h-32 rounded-full mx-auto mb-4" />
        <h3 class="text-xl font-bold">John Doe</h3>
        <p class="text-gray-600">CEO & Founder</p>
      </div>
      <div class="text-center">
        <NuxtImg src="https://picsum.photos/seed/jules2/150/150" alt="Team Member 2" class="w-32 h-32 rounded-full mx-auto mb-4" />
        <h3 class="text-xl font-bold">Jane Smith</h3>
        <p class="text-gray-600">Chief Technology Officer</p>
      </div>
      <div class="text-center">
        <NuxtImg src="https://picsum.photos/seed/jules3/150/150" alt="Team Member 3" class="w-32 h-32 rounded-full mx-auto mb-4" />
        <h3 class="text-xl font-bold">Peter Jones</h3>
        <p class="text-gray-600">Lead Designer</p>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
</style>