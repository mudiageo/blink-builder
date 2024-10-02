<script>
  import { auth } from '$lib/auth';
  import { onMount } from 'svelte
  export let data
  
  let blinks = data.blinks || [
      { id: 1, name: 'My First Blink', template: 'Basic', status: 'Active' },
      { id: 2, name: 'NFT Showcase', template: 'NFT Gallery', status: 'Draft' },
    ];

  
</script>

<svelte:head>
  <title>Dashboard | BlinkBuilder</title>
</svelte:head>

<div class="bg-white shadow overflow-hidden sm:rounded-lg">
  <div class="px-4 py-5 sm:px-6">
    <h3 class="text-lg leading-6 font-medium text-gray-900">
      Your Blinks
    </h3>
    <p class="mt-1 max-w-2xl text-sm text-gray-500">
      Manage and monitor your Blinks here.
    </p>
  </div>
  <div class="border-t border-gray-200">
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Name
          </th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Template
          </th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Status
          </th>
          <th scope="col" class="relative px-6 py-3">
            <span class="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        {#each blinks as blink}
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm font-medium text-gray-900">
                {blink.name}
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{blink.template}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                {blink.status}
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <a href="/edit/{blink.id}" class="text-indigo-600 hover:text-indigo-900">Edit</a>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
<main class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">Your Blinks</h1>

  {#if blinks.length === 0}
    <p>You haven't created any Blinks yet.</p>
  {:else}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each blinks as blink}
        <div class="bg-white shadow rounded-lg p-6">
          <h2 class="text-xl font-semibold mb-2">{blink.title}</h2>
          <p class="text-gray-600 mb-4">{blink.description}</p>
          <p class="text-sm text-gray-500">Solana Address: {blink.solana_address}</p>
          <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            View Details
          </button>
        </div>
      {/each}
    </div>
  {/if}
</main>