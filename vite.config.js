import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base :  "/my-vite-react-app_B3_2022-2023-YNOV/",
  plugins: [react()],
})
