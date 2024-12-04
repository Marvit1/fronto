import axios from 'axios';
import { useRuntimeConfig } from '#app';

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  const api = axios.create({
    baseURL: config.public.apiBase, // Use the base URL from runtime config
  });

  return {
    provide: {
      api,
    },
  };
});
