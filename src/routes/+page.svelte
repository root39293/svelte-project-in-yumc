<!-- src\routes\+page.svelte -->

<script>
  
  import { fade, scale } from 'svelte/transition';
  import { goto } from '$app/navigation';
  let email = "";

  function scrollToFeatures() {
    goto('#features', { behavior: 'smooth', inertia: true });
  }
</script>
<div class="flex flex-col min-h-screen">
  <header class="bg-gradient-to-r from-blue-700 to-blue-300 text-white flex-1 flex items-center justify-center min-h-screen">
    <div class="text-center">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Welcome to Our Website</h1>
      <p class="mb-8 text-lg md:text-xl lg:text-2xl">Discover our products and services</p>
      <button on:click={scrollToFeatures} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">Get in Touch</button>
    </div>
  </header>

  <section id="features" class="container mx-auto px-6 py-16">
    <h2 class="text-3xl font-bold text-center mb-8">Features</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div transition:fade class="bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-bold mb-2">Feature One</h3>
        <p class="text-gray-700">Description of feature one.</p>
      </div>
      <div transition:fade class="bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-bold mb-2">Feature Two</h3>
        <p class="text-gray-700">Description of feature two.</p>
      </div>
      <div transition:fade class="bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-bold mb-2">Feature Three</h3>
        <p class="text-gray-700">Description of feature three.</p>
      </div>
    </div>
  </section>

  <section id="products" class="bg-gray-200 py-16">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-center mb-8">Our Products</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div transition:scale class="rounded-lg shadow-md p-6">
          <h3 class="text-xl font-bold mb-2">Product One</h3>
          <p class="text-gray-700">Description of product one.</p>
        </div>
        <div transition:scale class="rounded-lg shadow-md p-6">
          <h3 class="text-xl font-bold mb-2">Product Two</h3>
          <p class="text-gray-700">Description of product two.</p>
        </div>
      </div>
    </div>
  </section>



  <section id="contact" class="py-16">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-center mb-8">Contact Us</h2>
      <div class="flex justify-center">
        <form class="w-full max-w-lg">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="email">
                Email
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="email" type="email" placeholder="you@example.com" bind:value={email}>
            </div>
          </div>
          <div class="flex justify-center">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>

</div>
