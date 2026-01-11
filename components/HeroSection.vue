<script setup lang="ts">

</script>

<template>
  <div class="relative h-[70vh] min-h-[500px] flex items-center justify-center text-center text-white">
    <NuxtImg
        src="/images/hero-image.jpg"
        alt="A beautifully staged, modern living room"
        class="absolute inset-0 w-full h-full object-cover"
        preload
    />
    <div class="absolute inset-0 bg-primary/70" />

    <div class="relative z-10 p-4">
      <h1 class="text-4xl md:text-6xl font-bold tracking-tight font-serif">
        Creating Beautiful Welcoming Spaces
      </h1>
      <p class="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
        HELPING YOU TURN YOUR HOUSE INTO A HOME
      </p>

      <NuxtLink
          to="/contact"
          class="mt-8 inline-block bg-secondary hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full transition-colors"
      >
        Get a Free Consultation
      </NuxtLink>
    </div>
  </div>
</template>