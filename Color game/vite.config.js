import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allows access from external networks
    port: 3000, // Ensure it's the same port you're using
    strictPort: true, // Ensures it always runs on the specified port
    allowedHosts: ['.ngrok-free.app'], // Allows any ngrok subdomain
  },
})
