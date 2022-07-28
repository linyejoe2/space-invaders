import { defineConfig } from 'vite'

export default defineConfig(async ({ command, mode }) => {
  return {
    // vite config
    server: {
      port: 3005
    }
  }
})