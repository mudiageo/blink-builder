<script>
  import { onMount } from 'svelte';

  let templates = [];

  onMount(async () => {
    // Fetch templates here
    // For now, we'll use dummy data
    templates = [
      { id: 1, name: 'Basic Blink', description: 'A simple Blink for general use' },
      { id: 2, name: 'NFT Gallery', description: 'Showcase your NFT collection' },
      { id: 3, name: 'Token Swap', description: 'Allow users to swap tokens directly' },
    ];
  });

  function selectTemplate(templateId) {
    // Implement template selection logic
    console.log(`Selected template: ${templateId}`);
  }
</script>

<svelte:head>
  <title>Templates | BlinkBuilder</title>
</svelte:head>

<div class="bg-white">
  <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
    <div class="text-center">
      <h2 class="text-base font-semibold text-indigo-600 tracking-wide uppercase">Templates</h2>
      <p class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Choose your Blink template</p>
      <p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">Start with a pre-built template and customize it to fit your needs.</p>
    </div>
  </div>
</div>

<div class="bg-gray-100">
  <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
    <div class="grid grid-cols-1 gap-12 lg:grid-cols-3">
      {#each templates as template}
        <div class="bg-white shadow-lg rounded-lg overflow-hidden">
          <div class="px-6 py-8">
            <h3 class="text-2xl font-bold text-gray-900">{template.name}</h3>
            <p class="mt-4 text-gray-600">{template.description}</p>
            <button 
              on:click={() => selectTemplate(template.id)}
              class="mt-8 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Select Template
            </button>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>