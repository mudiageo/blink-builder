<script>
  export let data;

  let { popularBlinks, categories, error } = data;
  let selectedCategory = 'all';

  const filterByCategory = async (category) => {
    selectedCategory = category;
    try {
      const response = await fetch(`/api/blinks/filter?category=${category}`);
      if (response.ok) {
        popularBlinks = await response.json();
      } else {
        throw new Error('Failed to filter blinks');
      }
    } catch (error) {
      console.error('Error filtering blinks:', error);
    }
  }
</script>

<main class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">Blinks Marketplace</h1>

  {#if error}
    <p class="text-red-500">{error}</p>
  {:else}
    <div class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Categories</h2>
      <div class="flex space-x-4">
        <button
          class="px-4 py-2 rounded {selectedCategory === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}"
          on:click={() => filterByCategory('all')}
        >
          All
        </button>
        {#each categories as category}
          <button
            class="px-4 py-2 rounded {selectedCategory === category.name ? 'bg-blue-500 text-white' : 'bg-gray-200'}"
            on:click={() => filterByCategory(category.name)}
          >
            {category.name}
          </button>
        {/each}
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each popularBlinks as blink}
        <div class="bg-white shadow rounded-lg p-6">
          <h2 class="text-xl font-semibold mb-2">{blink.title}</h2>
          <p class="text-gray-600 mb-4">{blink.description}</p>
          <p class="text-sm text-gray-500">Views: {blink.views}</p>
          <p class="text-sm text-gray-500">Creator: {blink.user.name}</p>
          <p class="text-sm text-gray-500">Category: {blink.category.name}</p>
          <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Use Blink
          </button>
        </div>
      {/each}
    </div>
  {/if}
</main>
