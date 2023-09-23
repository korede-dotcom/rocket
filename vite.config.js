// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Define the environment variable files to load based on the current mode
  const envFiles = [`.env.${mode}`, '.env'].filter(Boolean);

  // Load and parse the environment variables from the specified files
  const envVariables = envFiles.reduce((acc, file) => {
    try {
      const parsedEnv = require('dotenv').config({ path: file }).parsed;
      if (parsedEnv) {
        acc = { ...acc, ...parsedEnv };
      }
    } catch (e) {
      console.error(`Error loading environment variables from ${file}:`, e);
    }
    return acc;
  }, {});

  return {
    plugins: [react()],

    // Define environment variables to be available in your code
    define: {
      'process.env': envVariables, // Use 'process.env' to access environment variables
    },
  };
});
