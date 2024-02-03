<script>
    import { fade, scale } from 'svelte/transition';
    let email = "";

  // 더미 뉴스 데이터
  const mainNews = {
    title: "Major Breakthrough in Renewable Energy",
    summary: "Scientists announce a significant advancement in renewable energy technology, promising to revolutionize the industry.",
    imageUrl: "https://via.placeholder.com/800x450",
  };

  const latestNews = [
    { title: "Global Markets React to New Energy Discovery", summary: "Financial markets show optimism as new energy source is unveiled." },
    { title: "Tech Giants Invest in Renewable Energy", summary: "Leading technology companies announce major investments in green energy projects." },
    { title: "New Legislation Promotes Green Energy", summary: "Governments around the world pass new laws to accelerate the adoption of renewable energy." },
  ];

  const featuredNews = [
    { title: "Exploring the Potential of Solar Power", summary: "An in-depth look at how solar energy is changing the power landscape." },
    { title: "Wind Energy: The Future of Power", summary: "Experts discuss the advancements and future potential of wind energy." },
  ];
</script>

  
  
<div class="min-h-screen flex flex-col">
    <header class="bg-gray-800 text-white py-4 shadow-md">
      <div class="container mx-auto flex justify-between items-center px-6">
        <h1 class="text-3xl font-bold">News Today</h1>
        <nav>
          <ul class="flex space-x-4">
            <li><a href="#" class="hover:text-blue-300">Home</a></li>
            <li><a href="#" class="hover:text-blue-300">World</a></li>
            <li><a href="#" class="hover:text-blue-300">Politics</a></li>
            <li><a href="#" class="hover:text-blue-300">Sports</a></li>
            <li><a href="#" class="hover:text-blue-300">Technology</a></li>
          </ul>
        </nav>
      </div>
    </header>
  
    <main class="flex-1 container mx-auto p-6 flex flex-col lg:flex-row gap-6">
      <section class="lg:w-2/3">
        <div class="mb-8">
          <img src="{mainNews.imageUrl}" alt="Main news image" class="w-full h-auto rounded-lg shadow-lg mb-4"/>
          <h2 class="text-2xl font-bold mb-2">{mainNews.title}</h2>
          <p class="text-gray-700 mb-4">{mainNews.summary}</p>
        </div>
  
        <div class="space-y-6">
          <h3 class="text-xl font-bold mb-4">Latest News</h3>
          {#each latestNews as news}
            <article class="border-b pb-4 mb-4">
              <h4 class="text-lg font-semibold mb-2">{news.title}</h4>
              <p class="text-gray-600">{news.summary}</p>
            </article>
          {/each}
        </div>
      </section>
  
      <aside class="lg:w-1/3">
        <div class="sticky top-6">
          <div class="mb-6">
            <h3 class="text-xl font-bold mb-4">Featured News</h3>
            {#each featuredNews as news}
              <div class="mb-4">
                <h4 class="text-lg font-semibold">{news.title}</h4>
                <p class="text-gray-600">{news.summary}</p>
              </div>
            {/each}
          </div>
          <div class="bg-gray-300 p-4 rounded-lg shadow-md">
            <h3 class="text-xl font-bold mb-4">Advertisement</h3>
            <p>Ad space</p>
          </div>
        </div>
      </aside>
    </main>
  
    <footer class="bg-gray-800 text-white text-center py-4 mt-6">
      <p>&copy; 2024 News Today. All rights reserved.</p>
    </footer>
  </div>