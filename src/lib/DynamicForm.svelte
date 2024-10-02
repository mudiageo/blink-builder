<script>
  export let config = {}
  export let values = {}

  function handleInput(field, event) {
    values[field] = event.target.value
  }
</script>

{#each Object.entries(config.fields) as [field, fieldConfig]}
  <div class="mb-4">
    <label for={field} class="block text-sm font-medium text-gray-700">{fieldConfig.label}</label>
    {#if fieldConfig.type === 'text' || fieldConfig.type === 'number'}
      <input
        type={fieldConfig.type}
        id={field}
        name={field}
        value={values[field] || ''}
        on:input={(e) => handleInput(field, e)}
        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      />
    {:else if fieldConfig.type === 'textarea'}
      <textarea
        id={field}
        name={field}
        value={values[field] || ''}
        on:input={(e) => handleInput(field, e)}
        rows="3"
        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      ></textarea>
    {:else if fieldConfig.type === 'select'}
      <select
        id={field}
        name={field}
        value={values[field] || ''}
        on:change={(e) => handleInput(field, e)}
        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      >
        {#each fieldConfig.options as option}
          <option value={option.value}>{option.label}</option>
        {/each}
      </select>
    {/if}
  </div>
{/each}