import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

const isTest = process.env.NODE_ENV === 'test'

// https://vitejs.dev/config/
export default defineConfig({
  // resolve: {
  //   preserveSymlinks: true
  // },
  plugins: [
    viteReact(),
    !isTest && TanStackRouterVite(),
  ],

})
