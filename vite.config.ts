/*
 * @Descripttion:
 * @version:
 * @Author: volit
 * @Date: 2022-11-14 22:16:54
 * @LastEditors: volit
 * @LastEditTime: 2022-12-16 18:34:57
 */
import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import legacy from "@vitejs/plugin-legacy";
import Components from "unplugin-vue-components/vite";
import viteCompression from "vite-plugin-compression";
import { autoComplete, Plugin as importToCDN } from "vite-plugin-cdn-import";

export default defineConfig({
  base: "./",
  plugins: [
    vue(),
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
    Components({
      dts: true,
      dirs: ["src/components"], // 按需加载的文件夹
    }),
    importToCDN({
      modules: [
        // autoComplete('lodash'),
        autoComplete("axios"),
        // autoComplete("vue"),
        {
          name: "TDesign", //安装vue-demi并导入 因为pinia中有用vue依赖中的vue-demi
          var: "TDesign",
          path: "//unpkg.com/tdesign-vue-next@0.26.2/dist/tdesign.min.js",
          css: "//unpkg.com/tdesign-vue-next@0.26.2/es/style/index.css",
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  server: {
    // 是否开启 https
    https: false,
    // 端口号
    port: 8888,
    // 监听所有地址
    host: "0.0.0.0",
    // 服务启动时是否自动打开浏览器
    open: true,
    // 允许跨域
    cors: true,
    // 自定义代理规则
    proxy: {
      "/api": {
        // target: "http://localhost:3000/",
        target: "http://www.volit.top:3000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        //生产环境时移除console
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        //静态资源分类打包
        chunkFileNames: "static/js/[name]-[hash].js",
        entryFileNames: "static/js/[name]-[hash].js",
        assetFileNames: "static/[ext]/[name]-[hash].[ext]",
        manualChunks(id) {
          //静态资源分拆打包
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },

  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${resolve(
            "src/style/variables.less"
          )}";`,
        },
        math: "strict",
        javascriptEnabled: true,
      },
    },
  },
});
