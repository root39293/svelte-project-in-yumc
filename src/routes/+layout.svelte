<!-- src\routes\+layout.svelte -->

<script>
    import "../app.css";
  </script>
  
  <nav class="bg-gray-800 text-white py-4">
    <div class="container mx-auto flex justify-between items-center px-6">
      <a href="/"><div class="font-bold text-xl">YUMC News</div></a>
      <div class="space-x-4">
        <a href="/news" class="hover:underline">News</a>
        <a href="/board" class="hover:underline">Board</a>
        <a href="/login" class="hover:underline">Login</a>
        <a href="/register" class="hover:underline">Register</a>
      </div>
    </div>
  </nav>
  
  <slot />
  
  <footer class="bg-gray-800 text-white text-center py-4">
    <p>&copy; 2024 YUMC. All rights reserved.</p>
  </footer>