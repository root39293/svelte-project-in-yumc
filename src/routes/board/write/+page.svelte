<!-- src\routes\board\write\+page.svelte -->

<script>
  import { goto } from '$app/navigation';
  import { writable } from 'svelte/store';

  // 게시글 목록을 저장하는 store 생성
  const posts = writable([
    {
      id: 1,
      title: "First Post",
      summary: "This is the summary of the first post.",
      author: "Author Name",
      createdAt: "2024-01-01",
    },
  ]);

  let title = '';
  let content = '';

  const submitPost = () => {
    event.preventDefault();
    if (title.trim() === '' || content.trim() === '') {
      alert('Please fill in both title and content fields');
      return;
    }

    // 새로운 게시글 생성
    const newPost = {
      id: posts.length + 1,
      title,
      summary: content.substring(0, 50), // 내용의 일부를 요약하여 사용 (예시)
      author: "Anonymous", // 작성자는 임의로 설정 (예시)
      createdAt: new Date().toLocaleString()
    };

    // 기존 게시글 목록에 새로운 게시글 추가
    posts.update(currentPosts => [...currentPosts, newPost]);

    // 게시글 등록 후 게시판 페이지로 이동
    goto('/board');
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
