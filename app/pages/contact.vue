<script setup lang="ts">
// Set the title and description for this page
useHead({
  title: 'Contact Us | Staging Co.',
  meta: [
    { name: 'description', content: 'Get in touch with us for a free home staging consultation.' }
  ]
})
</script>

<template>
  <div class="bg-white py-16">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h1 class="text-5xl font-bold text-primary">Get in Touch</h1>
        <p class="text-lg text-gray-600 mt-2">We'd love to hear about your project. Contact us for a free consultation.</p>
      </div>

      <div class="grid md:grid-cols-2 gap-16 items-start">
        <div class="space-y-6">
          <div class="flex items-start gap-4">
            <Icon name="ph:map-pin-bold" class="text-secondary text-3xl mt-1" />
            <div>
              <h3 class="text-xl font-bold text-primary">Our Office</h3>
              <p class="text-gray-600">123 Design Lane, Suite 100<br>New York, NY 10001</p>
            </div>
          </div>
          <div class="flex items-start gap-4">
            <Icon name="ph:envelope-simple-bold" class="text-secondary text-3xl mt-1" />
            <div>
              <h3 class="text-xl font-bold text-primary">Email Us</h3>
              <p class="text-gray-600">contact@stagingco.com</p>
            </div>
          </div>
          <div class="flex items-start gap-4">
            <Icon name="ph:phone-bold" class="text-secondary text-3xl mt-1" />
            <div>
              <h3 class="text-xl font-bold text-primary">Call Us</h3>
              <p class="text-gray-600">(555) 123-4567</p>
            </div>
          </div>
        </div>

        <div>
          <form class="space-y-6 bg-slate-50 p-8 rounded-lg shadow-sm">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" id="name" name="name" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary">
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Email Address</label>
              <input type="email" id="email" name="email" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary">
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows="4" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"></textarea>
            </div>
            <div>
              <button type="submit" class="w-full bg-secondary hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>