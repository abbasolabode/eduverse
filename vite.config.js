import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // ← This is the React integration
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(), // ← React plugin enabled here
    tailwindcss(),
  ],
});