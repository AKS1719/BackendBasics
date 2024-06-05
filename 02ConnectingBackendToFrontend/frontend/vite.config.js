import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy:{
      '/api':'http://localhost:3000', // it appends the localhost part where ever the /api is called and it will make a proxy that the localhost part is making the request not the other ip
    },
  },
  plugins: [react()],
})
