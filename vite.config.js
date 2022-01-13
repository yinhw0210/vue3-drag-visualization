import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const { resolve } = require('path')
import { svgBuilder } from './src/utils/ceater'
import vueJsx from '@vitejs/plugin-vue-jsx'
export default defineConfig({
  plugins: [vue(), svgBuilder('./src/icons/svg/'), vueJsx()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      }
    ]
  },
  server: {
    host: 'localhost',
    port: 8080,
    open: true,
    cors: true,
    proxy: {
      '/api': {
        // target: 'http://121.41.67.22:88',
        target: 'http://121.41.67.22:88',
        changeOrigin: true
        // rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  },
  /* 打包配置 */
  base: './',
  build: {
    brotliSize: false,
    emptyOutDir: false,
    outDir: 'dist',
    assetsDir: 'static'
  }
})
