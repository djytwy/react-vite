import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  // vite 配置新写法：真香
  resolve: {
    alias : [
      { find: '@', replacement: '/src' },
      { find: 'views', replacement: '/src/views'},
      { find: 'components', replacement: '/src/components'}
    ]
  }
})
