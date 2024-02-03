<!-- src\routes\login\+page.svelte -->

<script>
  let email = '';
  let password = '';

  const login = () => {
    console.log('Logging in', { email, password });
  };
</script>

<div class="flex justify-center items-center min-h-screen bg-gray-100">
  <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
    <h2 class="text-3xl font-bold text-center">Login</h2>
    <div>
      <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
      <input type="email" id="email" class="mt-1 block w-full p-2 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" bind:value={email}>
    </div>
    <div>
      <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
      <input type="password" id="password" class="mt-1 block w-full p-2 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" bind:value={password}>
    </div>
    <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow w-full" on:click={login}>
      Login
    </button>
  </div>
</div>