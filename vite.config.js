export default {
  // root: 'src',
  base: "./",
  build: {
    outDir: 'docs'
  }
}

// https://github.com/vitejs/vite/discussions/5081
//
// import { defineConfig } from "vite";
// // https://vitejs.dev/config/
// export default defineConfig({
//   base: "./",
//   // your other configuration...
// });


// import path from 'path'

// export default {
//   root: path.resolve(__dirname, 'src'),
//   build: {
//     outDir: path.resolve(__dirname, 'dist'),
//     rollupOptions: {
//       input: {
//         index: path.resolve(__dirname, 'src/index.html'),
//         about: path.resolve(__dirname, 'src/about.html')
//       }
//     }
//   }
// }