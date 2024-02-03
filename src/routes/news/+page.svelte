<!-- src\routes\news\+page.svelte -->

<script>
  import { fade, scale } from 'svelte/transition';
  import { onMount } from 'svelte';
  let newsList = [];

  onMount(async () => {
    // Fetch news data from an API or static file
    newsList = [
      // Dummy news data
      {
        title: "Major Breakthrough in Renewable Energy",
        summary: "Scientists announce a significant advancement in renewable energy technology, promising to revolutionize the industry.",
        imageUrl: "https://via.placeholder.com/800x450",
      },
      // More news items...
    ];
  });
</script>

<div class="min-h-screen flex flex-col">
  <main class="flex-1 container mx-auto p-6">
    <h2 class="text-2xl font-bold mb-6">Latest News</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each newsList as news}
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="{news.imageUrl}" alt="News image" class="w-full h-48 object-cover"/>
          <div class="p-4">
            <h3 class="text-lg font-semibold mb-2">{news.title}</h3>
            <p class="text-gray-700">{news.summary}</p>
          </div>
        </div>
      {/each}
    </div>
  </main>
</div>
