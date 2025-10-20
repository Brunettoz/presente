import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/presente/',  // <<=== precisa ser o mesmo nome do seu repositório
  plugins: [react()],
});
