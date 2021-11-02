import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import Component from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Component({
      resolvers: [
        AntDesignVueResolver({
          resolveIcons: true,
          importStyle: 'less'
        })
      ]
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
        modifyVars: {
          '@ant-prefix': 'demo'
        }
      }
    }
  }
})
