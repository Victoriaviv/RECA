import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



// www.reca.org/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
  },
});
