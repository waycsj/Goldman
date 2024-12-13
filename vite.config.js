import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: { port: 3000//포트번호를 5173에서 3000번으로 바꿈   5173번 사용중//
    }
  }
);