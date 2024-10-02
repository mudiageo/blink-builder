<script>
import { fly, fade } from 'svelte/transition';
  import { ArrowRight, Zap, Shield, Users } from 'lucide-svelte';
  import Header from '$lib/components/Header.svelte'
  import Footer from '$lib/components/Footer.svelte'
</script>

<svelte:head>
  <title>BlinkBuilder - Create Solana Blinks in Seconds</title>
  <meta name="description" content="BlinkBuilder is a no-code platform for creating and managing Solana Blinks. Build, customize, and share your Blinks with ease." />
</svelte:head>

<div class="bg-gradient-to-b from-primary-50 to-primary-100 min-h-screen">
  <Header />

  <main>
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span class="block">Create Solana Blinks</span>
          <span class="block text-primary">in Seconds</span>
        </h1>
        <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          BlinkBuilder is a no-code platform that lets you create, customize, and share Solana Blinks effortlessly. Start building your blockchain presence today!
        </p>
        <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div class="rounded-md shadow">
            <a href="/signup" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark md:py-4 md:text-lg md:px-10">
              Get started
            </a>
          </div>
          <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <a href="/templates" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
              View templates
            </a>
          </div>
        </div>
      </div>
    </div>
<section class="bg-gradient-to-b from-primary-50 to-primary-100 py-20 sm:py-32">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 in:fly="{{ y: 50, duration: 1000 }}" class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Create Solana Blinks in Seconds
        </h1>
        <p in:fly="{{ y: 50, duration: 1000, delay: 200 }}" class="mt-6 text-lg leading-8 text-gray-600">
          BlinkBuilder is a no-code platform that lets you create, customize, and share Solana Blinks effortlessly. Start building your blockchain presence today!
        </p>
        <div in:fade="{{ duration: 1000, delay: 400 }}" class="mt-10 flex items-center justify-center gap-x-6">
          <a href="/signup" variant="default" size="lg">
            Get started
            <ArrowRight class="ml-2 h-4 w-4" />
          </a>
          <a href="/templates" variant="outline" size="lg">
            View templates
          </a>
        </div>
      </div>
    </div>
  </section>
    <div class="bg-white">
      <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-extrabold text-gray-900 text-center">
          Why choose BlinkBuilder?
        </h2>
        <div class="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
          <div class="flex flex-col items-center">
            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
              <Zap class="h-6 w-6" />
            </div>
            <h3 class="mt-6 text-xl font-medium text-gray-900">Lightning Fast</h3>
            <p class="mt-2 text-base text-gray-500 text-center">
              Create and deploy Solana Blinks in seconds, not hours or days.
            </p>
          </div>
          <div class="flex flex-col items-center">
            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
              <Shield class="h-6 w-6" />
            </div>
            <h3 class="mt-6 text-xl font-medium text-gray-900">Secure & Reliable</h3>
            <p class="mt-2 text-base text-gray-500 text-center">
              Built on Solana's secure blockchain with industry-standard safety measures.
            </p>
          </div>
          <div class="flex flex-col items-center">
            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
              <Users class="h-6 w-6" />
            </div>
            <h3 class="mt-6 text-xl font-medium text-gray-900">Community-Driven</h3>
            <p class="mt-2 text-base text-gray-500 text-center">
              Join a thriving ecosystem of creators and users sharing Blinks.
            </p>
          </div>
        </div>
      </div>
    </div>
<section class="bg-white py-16 sm:py-24">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <h2 class="text-center text-lg font-semibold leading-8 text-gray-900">
      Trusted by the world's most innovative teams
    </h2>
    <div class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
      <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="/sponsors/solana-logo.svg" alt="Solana" width="158" height="48">
      <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="/sponsors/superteam-logo.svg" alt="Superteam" width="158" height="48">
      <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="/sponsors/sponsor3-logo.svg" alt="Sponsor 3" width="158" height="48">
      <img class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" src="/sponsors/sponsor4-logo.svg" alt="Sponsor 4" width="158" height="48">
      <img class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" src="/sponsors/sponsor5-logo.svg" alt="Sponsor 5" width="158" height="48">
    </div>
  </div>
</section>

    <div class="bg-primary">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span class="block">Ready to dive in?</span>
          <span class="block text-primary-light">Start building your Blinks today.</span>
        </h2>
        <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div class="inline-flex rounded-md shadow">
            <a href="/signup" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-primary-light">
              Get started
              <ArrowRight class="ml-2 -mr-1 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
<Footer/>
</div>


<!--<script>
  import { onMount } from 'svelte';

  let templates = [];

  onMount(async () => {
    // Fetch templates from an API or load from a local file
    templates = [
      { id: 1, name: 'Basic Blink', description: 'A simple Solana transaction link' },
      { id: 2, name: 'NFT Showcase', description: 'Display and sell NFTs' },
      { id: 3, name: 'Token Swap', description: 'Exchange Solana tokens' },
    ];
  });
</script>

<main class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">Create Your Blink</h1>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each templates as template}
      <div class="bg-white shadow rounded-lg p-6">
        <h2 class="text-xl font-semibold mb-2">{template.name}</h2>
        <p class="text-gray-600 mb-4">{template.description}</p>
        <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Use Template
        </button>
      </div>
    {/each}
  </div>

  <div class="mt-12">
    <h2 class="text-2xl font-bold mb-4">Request a New Template</h2>
    <form class="space-y-4">
      <input
        type="text"
        placeholder="Template Name"
        class="w-full px-4 py-2 border rounded"
      />
      <textarea
        placeholder="Template Description"
        class="w-full px-4 py-2 border rounded"
        rows="4"
      ></textarea>
      <button type="submit" class="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
        Submit Request
      </button>
    </form>
  </div>
</main>
-->