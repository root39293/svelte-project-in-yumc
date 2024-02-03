<!-- src\routes\register\+page.svelte -->

<script>
    let name = '';
    let email = '';
    let password = '';
  
    const register = () => {
      // Handle registration logic
      console.log('Registering', { name, email, password });
    };
  </script>
  
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow">
      <h2 class="text-2xl font-bold text-center">Register</h2>
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
        <input type="text" id="name" class="mt-1 block w-full p-2 border-2 border-gray-400 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" bind:value={name}>
      </div>
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" id="email" class="mt-1 block w-full p-2 border-2 border-gray-400 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" bind:value={email}>
      </div>
      <div>
        <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
        <input type="password" id="password" class="mt-1 block w-full p-2 border-2 border-gray-400 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" bind:value={password}>
      </div>
      <button class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" on:click={register}>
        Register
      </button>
    </div>
  </div>