<script>
  import { onMount } from 'svelte';
  import { Connection, PublicKey } from '@solana/web3.js';

  let templateName = '';
  let blink = {
    title: '',
    description: '',
    solanaAddress: '',
  };

  let isPublishing = false;

  onMount(() => {
    // In a real application, you would get the template details from the route parameters or a store
    templateName = 'Basic Blink';
  });

  async function publishBlink() {
    isPublishing = true;
    try {
      // Here you would integrate with Solana to create the actual Blink
      // This is a placeholder for the actual implementation
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert('Blink published successfully!');
    } catch (error) {
      console.error('Error publishing Blink:', error);
      alert('Failed to publish Blink. Please try again.');
    } finally {
      isPublishing = false;
    }
  }
</script>

<main class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">Customize Your {templateName}</h1>

  <form on:submit|preventDefault={publishBlink} class="space-y-6">
    <div>
      <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
      <input
        type="text"
        id="title"
        bind:value={blink.title}
        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        required
      />
    </div>

    <div>
      <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
      <textarea
        id="description"
        bind:value={blink.description}
        rows="3"
        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        required
      ></textarea>
    </div>

    <div>
      <label for="solanaAddress" class="block text-sm font-medium text-gray-700">Solana Address</label>
      <input
        type="text"
        id="solanaAddress"
        bind:value={blink.solanaAddress}
        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        required
      />
    </div>

    <button
      type="submit"
      class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      disabled={isPublishing}
    >
      {isPublishing ? 'Publishing...' : 'Publish Blink'}
    </button>
  </form>
</main>
