// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/reactlab03/',  // 👈 แก้ตามชื่อ repo บน GitHub
})
