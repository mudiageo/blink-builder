<script>
  import { enhance } from '$app/forms';
  import { auth } from '$lib/auth';
  import { goto } from '$app/navigation';
  
  import { Loader2, AlertTriangle } from 'lucide-svelte';
  import * as solanaWeb3 from '@solana/web3.js';

  let email = '';
  let password = '';
  let error = '';
  let loading = false;

  async function handleSubmit(event) {
    loading = true;
    error = '';

    try {
      await auth.signIn(email, password);
      goto('/dashboard');
    } catch (e) {
      error = e.message;
    } finally {
      loading = false;
    }
  }

  async function handleSolanaSignIn() {
    loading = true;
    error = '';

    try {
      const provider = window.solana;
      if (!provider) {
        throw new Error('No Solana wallet found');
      }

      await provider.connect();
      const publicKey = provider.publicKey.toString();
      
      // Here you would typically send the public key to your backend to verify
      // and create a session. For this example, we'll just simulate a successful login.
      await auth.signInWithSolana(publicKey);
      goto('/dashboard');
    } catch (e) {
      error = e.message;
    } finally {
      loading = false;
    }
  }
</script>

<svelte:head>
  <title>Login | BlinkBuilder</title>
</svelte:head>

<div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-md w-full space-y-8">
    <div>
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Sign in to your account
      </h2>
    </div>
    <form class="mt-8 space-y-6" use:enhance method="POST" on:submit|preventDefault={handleSubmit}>
      <div class="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="email-address" class="sr-only">Email address</label>
          <input id="email-address" name="email" type="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" bind:value={email} />
        </div>
        <div>
          <label for="password" class="sr-only">Password</label>
          <input id="password" name="password" type="password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" bind:value={password} />
        </div>
      </div>

      {#if error}
        <div class="alert destructive">
          <AlertTriangle class="h-4 w-4" />
          <div class="alert-title">Error</div>
          <div class="alert-description">{error}</AlertDescription>
        </div>
      {/if}

      <div class="flex items-center justify-between">
        <div class="text-sm">
          <a href="/forgot-password" class="font-medium text-indigo-600 hover:text-indigo-500">
            Forgot your password?
          </a>
        </div>
      </AlertTriangle>

      <div>
        <button type="submit" class="group relative w-full" disabled={loading}>
          {#if loading}
            <Loader2 class="mr-2 h-4 w-4 animate-spin" />
          {/if}
          Sign in
        </button>
      </div>
    </form>

    <div class="mt-6">
      <div class="relative">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t border-gray-300"></div>
        </div>
        <div class="relative flex justify-center text-sm">
          <span class="px-2 bg-gray-50 text-gray-500">
            Or continue with
          </span>
        </div>
      </div>

      <div class="mt-6">
        <button on:click={handleSolanaSignIn} class="w-full">
          <img src="/solana-logo.svg" alt="Solana logo" class="h-5 w-5 mr-2" />
          Sign in with Solana
        </button>
      </div>
    </div>

    <div class="text-center mt-4">
      <p class="text-sm text-gray-600">
        Don't have an account?
        <a href="/signup" class="font-medium text-indigo-600 hover:text-indigo-500">
          Sign up
        </a>
      </p>
    </div>
  </div>
</div>