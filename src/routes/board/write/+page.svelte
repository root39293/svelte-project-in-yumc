<!-- src\routes\board\write\+page.svelte -->

<script>
  import posts from "./write";
  import {createEventDispatcher} from "svelte";
  const dispatch = createEventDispatcher();
  let title = '';
  let content = '';
  const submitPost = () => {
    const postData = {
      title:title,
      content:content
    }
    if(id){
      posts.updatedPost(id,postData);
    }
    else{
      posts.addPost(postData);
    }
    dispatch("save");
  };
</script>

<div class="container mx-auto p-6 max-w-4xl">
  <h2 class="text-3xl font-bold mb-6 text-center">Write a Post</h2>
  <div class="mb-4">
    <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
    <input type="text" id="title" class="mt-1 block w-full p-2 border-2 border-gray-400 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" bind:value={title}>
  </div>
  <div class="mb-4">
    <label for="content" class="block text-sm font-medium text-gray-700">Content</label>
    <textarea id="content" rows="10" class="mt-1 block w-full p-2 border-2 border-gray-400 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" bind:value={content}></textarea>
  </div>
  <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow" on:click={submitPost}>Submit Post</button>
</div>