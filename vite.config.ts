import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{
      find: 'mint-ui',
      replacement: path.join(__dirname)
    }, {
      find: "src",
      replacement: path.join(__dirname, './src')
    }, {
      find: "example",
      replacement: path.join(__dirname, './example')
    }]
  },
  plugins: [vue()]
})
