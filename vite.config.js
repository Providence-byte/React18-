import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      react: path.posix.resolve("src/react"),
      "react-dom": path.posix.resolve("src/react-dom"),
      "react-reconciler": path.posix.resolve("src/react-reconciler"),
      schedule: path.posix.resolve("src/schedule"),
      shared: path.posix.resolve("src/shared"),
    },
  },
  plugins: [react()],
});

// path.posix ? 允许在任意操作系统上使用linux的方式来操作路径。 
// windows 和 linux 路径分隔符不同  win \   linux /