<script>
  import { enhance } from '$app/forms';
  import { auth } from '$lib/auth';
  import { goto } from '$app/navigation';
  import { Loader2, AlertTriangle } from 'lucide-svelte';
  

  let name = '';
  let email = '';
  let password = '';
  let error = '';
  let loading = false;
  let agreeToTerms = false;

  async function handleSubmit(event) {
    loading = true;
    error = '';

    if (!agreeToTerms) {
      error = 'You must agree to the Terms of Service and Privacy Policy';
      loading = false;
      return;
    }

    try {
      await auth.signUp(name, email, password);
      goto('/dashboard');
    } catch (e) {
      error = e.message;
    } finally {
      loading = false;
    }
  }
</script>

<svelte:head>
  <title>Sign Up | BlinkBuilder</title>
</svelte:head>

<div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-md w-full space-y-8">
    <div>
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Create your account
      </h2>
    </div>
    <form class="mt-8 space-y-6" use:enhance method="POST" on:submit|preventDefault={handleSubmit}>
      <div class="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="name" class="sr-only">Name</label>
          <input id="name" name="name" type="text" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Name" bind:value={name} />
        </div>
        <div>
          <label for="email-address" class="sr-only">Email address</label>
          <input id="email-address" name="email" type="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" bind:value={email} />
        </div>
        <div>
          <label for="password" class="sr-only">Password</label>
          <input id="password" name="password" type="password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" bind:value={password} />
        </div>
      </div>

      <div class="flex items-center">
        <input type="checkbox" id="agree-terms" bind:checked={agreeToTerms} />
        <label for="agree-terms" class="ml-2 block text-sm text-gray-900">
          I agree to the <a href="/terms" class="font-medium text-indigo-600 hover:text-indigo-500">Terms of Service</a> and <a href="/privacy-policy" class="font-medium text-indigo-600 hover:text-indigo-500">Privacy Policy</a>
        </label>
      </div>

      {#if error}
        <div class="alert destructive">
          <AlertTriangle class="h-4 w-4" />
          <div class="alert-title">Error</div>
          <div class="alert-description">{error}</div>
        </div>
      {/if}

      <div>
        <button type="submit" class="group relative w-full" disabled={loading}>
          {#if loading}
            <Loader2 class="mr-2 h-4 w-4 animate-spin" />
          {/if}
          Sign up
        </Button>
      </div>
    </form>

    <div class="text-center mt-4">
      <p class="text-sm text-gray-600">
        Already have an account?
        <a href="/login" class="font-medium text-indigo-600 hover:text-indigo-500">
          Log in
        </a>
      </p>
    </div>
  </div>
</div>