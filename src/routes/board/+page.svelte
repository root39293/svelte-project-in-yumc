<!-- src\routes\board\+page.svelte -->

<script>
  import { onMount } from 'svelte';
  let posts = [];

  onMount(async () => {
    posts = [
      {
        id: 1,
        title: "First Post",
        summary: "This is the summary of the first post.",
        author: "Author Name",
        createdAt: "2024-01-01",
      },
    ];
  });
</script>

<div class="container mx-auto p-6">
  <div class="flex justify-between items-center mb-6">
    <h2 class="text-3xl font-bold">Board Posts</h2>
    <a href="/board/write" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow">Write Post</a>
  </div>

  <div class="space-y-4">
    {#each posts as post}
      <div class="p-4 bg-white rounded-lg shadow-lg">
        <h3 class="text-xl font-semibold">{post.title}</h3>
        <p class="text-gray-600">{post.summary}</p>
        <div class="text-gray-500 text-sm">Posted by {post.author} on {post.createdAt}</div>
      </div>
    {/each}
  </div>
</div>
