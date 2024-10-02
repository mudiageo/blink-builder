import { writable } from 'svelte/store';

const createAuth = () => {
  const { subscribe, set, update } = writable({
    user: null,
    loading: true,
    error: null
  });

  return {
    subscribe,
    signIn: async (email, password) => {
      // Implement sign in logic here
      // For now, we'll just simulate a successful sign in
      set({ user: { name: 'John Doe', email }, loading: false, error: null });
    },
    signOut: () => {
      // Implement sign out logic here
      set({ user: null, loading: false, error: null });
    },
    signUp: async (name, email, password) => {
      // Implement sign up logic here
      // For now, we'll just simulate a successful sign up
      set({ user: { name, email }, loading: false, error: null });
    }
  };
};

export const auth = createAuth();