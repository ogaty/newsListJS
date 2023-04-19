/// <reference types="vitest" />
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    Vue({
      reactivityTransform: true,
    }),
  ],
  test: {
    environment: 'jsdom'
  },
})
