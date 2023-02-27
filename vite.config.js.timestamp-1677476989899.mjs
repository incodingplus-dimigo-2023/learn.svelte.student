// vite.config.js
import path2 from "path";
import { sveltekit } from "file:///C:/Users/82103/Desktop/svelte/learn.svelte.student/node_modules/.pnpm/@sveltejs+kit@1.5.5_svelte@3.55.1+vite@4.1.1/node_modules/@sveltejs/kit/src/exports/vite/index.js";

// scripts/ws.js
import { Server } from "file:///C:/Users/82103/Desktop/svelte/learn.svelte.student/node_modules/.pnpm/socket.io@4.6.0/node_modules/socket.io/wrapper.mjs";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
var __vite_injected_original_import_meta_url = "file:///C:/Users/82103/Desktop/svelte/learn.svelte.student/scripts/ws.js";
async function injectSocketIO(server) {
  const io = new Server(server);
  const dir = path.resolve(fileURLToPath(__vite_injected_original_import_meta_url), "../../content");
  let pro = fs.watch(dir, {
    recursive: true
  });
  for await (let i of pro) {
    const arr = i.filename.split(path.sep);
    if (!arr.includes("app-b"))
      continue;
    const stat = await fs.lstat(path.resolve(dir, i.filename));
    io.local.emit("message", {
      ...i,
      mtimeMs: stat.mtimeMs
    });
  }
}

// vite.config.js
var vite_config_default = {
  build: {
    target: "esnext"
  },
  logLevel: "info",
  plugins: [
    sveltekit(),
    {
      name: "configure-response-headers",
      configureServer: (server) => {
        server.middlewares.use((_req, res, next) => {
          res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
          res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
          res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");
          res.setHeader("x-middleware-next", "1");
          next();
        });
      },
      configurePreviewServer: (server) => {
        server.middlewares.use((_req, res, next) => {
          res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
          res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
          res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");
          res.setHeader("x-middleware-next", "1");
          next();
        });
      }
    },
    {
      name: "webSocketServer",
      configureServer(server) {
        injectSocketIO(server.httpServer);
      }
    }
  ],
  server: {
    fs: {
      allow: [path2.resolve(".apps")]
    },
    watch: {
      ignored: ["**/.apps/**", "**/content/**"]
    }
  },
  ssr: {
    noExternal: ["@sveltejs/site-kit"]
  },
  optimizeDeps: {
    exclude: ["@sveltejs/site-kit"]
  }
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiLCAic2NyaXB0cy93cy5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXDgyMTAzXFxcXERlc2t0b3BcXFxcc3ZlbHRlXFxcXGxlYXJuLnN2ZWx0ZS5zdHVkZW50XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFw4MjEwM1xcXFxEZXNrdG9wXFxcXHN2ZWx0ZVxcXFxsZWFybi5zdmVsdGUuc3R1ZGVudFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvODIxMDMvRGVza3RvcC9zdmVsdGUvbGVhcm4uc3ZlbHRlLnN0dWRlbnQvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuaW1wb3J0IHsgc3ZlbHRla2l0IH0gZnJvbSAnQHN2ZWx0ZWpzL2tpdC92aXRlJztcclxuaW1wb3J0IFdlYnNvY2tldFNlcnZlciBmcm9tICcuL3NjcmlwdHMvd3MuanMnO1xyXG5cclxuLyoqIEB0eXBlIHtpbXBvcnQoJ3ZpdGUnKS5Vc2VyQ29uZmlnfSAqL1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0YnVpbGQ6IHtcclxuXHRcdHRhcmdldDogJ2VzbmV4dCdcclxuXHR9LFxyXG5cclxuXHRsb2dMZXZlbDogJ2luZm8nLFxyXG5cclxuXHRwbHVnaW5zOiBbXHJcblx0XHRzdmVsdGVraXQoKSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJjb25maWd1cmUtcmVzcG9uc2UtaGVhZGVyc1wiLFxyXG5cdFx0XHRjb25maWd1cmVTZXJ2ZXI6IChzZXJ2ZXIpID0+IHtcclxuXHRcdFx0XHRzZXJ2ZXIubWlkZGxld2FyZXMudXNlKChfcmVxLCByZXMsIG5leHQpID0+IHtcclxuXHRcdFx0XHRcdHJlcy5zZXRIZWFkZXIoXCJDcm9zcy1PcmlnaW4tRW1iZWRkZXItUG9saWN5XCIsIFwicmVxdWlyZS1jb3JwXCIpO1xyXG5cdFx0XHRcdFx0cmVzLnNldEhlYWRlcihcIkNyb3NzLU9yaWdpbi1PcGVuZXItUG9saWN5XCIsIFwic2FtZS1vcmlnaW5cIik7XHJcblx0XHRcdFx0XHRyZXMuc2V0SGVhZGVyKCdDcm9zcy1PcmlnaW4tUmVzb3VyY2UtUG9saWN5JywgJ2Nyb3NzLW9yaWdpbicpO1xyXG5cdFx0XHRcdFx0cmVzLnNldEhlYWRlcigneC1taWRkbGV3YXJlLW5leHQnLCAnMScpO1xyXG5cdFx0XHRcdFx0bmV4dCgpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LGNvbmZpZ3VyZVByZXZpZXdTZXJ2ZXI6IChzZXJ2ZXIpID0+IHtcclxuXHRcdFx0XHRzZXJ2ZXIubWlkZGxld2FyZXMudXNlKChfcmVxLCByZXMsIG5leHQpID0+IHtcclxuXHRcdFx0XHRcdHJlcy5zZXRIZWFkZXIoXCJDcm9zcy1PcmlnaW4tRW1iZWRkZXItUG9saWN5XCIsIFwicmVxdWlyZS1jb3JwXCIpO1xyXG5cdFx0XHRcdFx0cmVzLnNldEhlYWRlcihcIkNyb3NzLU9yaWdpbi1PcGVuZXItUG9saWN5XCIsIFwic2FtZS1vcmlnaW5cIik7XHJcblx0XHRcdFx0XHRyZXMuc2V0SGVhZGVyKCdDcm9zcy1PcmlnaW4tUmVzb3VyY2UtUG9saWN5JywgJ2Nyb3NzLW9yaWdpbicpO1xyXG5cdFx0XHRcdFx0cmVzLnNldEhlYWRlcigneC1taWRkbGV3YXJlLW5leHQnLCAnMScpO1xyXG5cdFx0XHRcdFx0bmV4dCgpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogJ3dlYlNvY2tldFNlcnZlcicsXHJcblx0XHRcdGNvbmZpZ3VyZVNlcnZlcihzZXJ2ZXIpIHtcclxuXHRcdFx0XHRXZWJzb2NrZXRTZXJ2ZXIoc2VydmVyLmh0dHBTZXJ2ZXIpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XSxcclxuXHJcblx0c2VydmVyOiB7XHJcblx0XHRmczoge1xyXG5cdFx0XHRhbGxvdzogW3BhdGgucmVzb2x2ZSgnLmFwcHMnKV1cclxuXHRcdH0sXHJcblx0XHR3YXRjaDoge1xyXG5cdFx0XHRpZ25vcmVkOiBbJyoqLy5hcHBzLyoqJywgJyoqL2NvbnRlbnQvKionXVxyXG5cdFx0fVxyXG5cdH0sXHJcblxyXG5cdHNzcjoge1xyXG5cdFx0bm9FeHRlcm5hbDogWydAc3ZlbHRlanMvc2l0ZS1raXQnXVxyXG5cdH0sXHJcblxyXG5cdG9wdGltaXplRGVwczoge1xyXG5cdFx0ZXhjbHVkZTogWydAc3ZlbHRlanMvc2l0ZS1raXQnXVxyXG5cdH1cclxufTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFw4MjEwM1xcXFxEZXNrdG9wXFxcXHN2ZWx0ZVxcXFxsZWFybi5zdmVsdGUuc3R1ZGVudFxcXFxzY3JpcHRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFw4MjEwM1xcXFxEZXNrdG9wXFxcXHN2ZWx0ZVxcXFxsZWFybi5zdmVsdGUuc3R1ZGVudFxcXFxzY3JpcHRzXFxcXHdzLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy84MjEwMy9EZXNrdG9wL3N2ZWx0ZS9sZWFybi5zdmVsdGUuc3R1ZGVudC9zY3JpcHRzL3dzLmpzXCI7aW1wb3J0IHsgU2VydmVyIH0gZnJvbSAnc29ja2V0LmlvJztcclxuaW1wb3J0IGZzIGZyb20gJ2ZzL3Byb21pc2VzJztcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tICd1cmwnO1xyXG4vKipcclxuICogXHJcbiAqIEBwYXJhbSB7aW1wb3J0KCd2aXRlJykuVml0ZURldlNlcnZlcn0gc2VydmVyIFxyXG4qL1xyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBpbmplY3RTb2NrZXRJTyhzZXJ2ZXIpIHtcclxuICAgIGNvbnN0IGlvID0gbmV3IFNlcnZlcihzZXJ2ZXIpO1xyXG4gICAgY29uc3QgZGlyID0gcGF0aC5yZXNvbHZlKGZpbGVVUkxUb1BhdGgoaW1wb3J0Lm1ldGEudXJsKSwgJy4uLy4uL2NvbnRlbnQnKTtcclxuICAgIGxldCBwcm8gPSBmcy53YXRjaChkaXIsIHtcclxuICAgICAgICByZWN1cnNpdmU6dHJ1ZSxcclxuICAgIH0pO1xyXG4gICAgZm9yIGF3YWl0IChsZXQgaSBvZiBwcm8pe1xyXG4gICAgICAgIGNvbnN0IGFyciA9IGkuZmlsZW5hbWUuc3BsaXQocGF0aC5zZXApO1xyXG4gICAgICAgIGlmKCFhcnIuaW5jbHVkZXMoJ2FwcC1iJykpIGNvbnRpbnVlO1xyXG4gICAgICAgIGNvbnN0IHN0YXQgPSBhd2FpdCBmcy5sc3RhdChwYXRoLnJlc29sdmUoZGlyLCBpLmZpbGVuYW1lKSlcclxuICAgICAgICBpby5sb2NhbC5lbWl0KCdtZXNzYWdlJywge1xyXG4gICAgICAgICAgICAuLi5pLCBtdGltZU1zOnN0YXQubXRpbWVNc1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il0sCiAgIm1hcHBpbmdzIjogIjtBQUFvVixPQUFPQSxXQUFVO0FBQ3JXLFNBQVMsaUJBQWlCOzs7QUNEa1UsU0FBUyxjQUFjO0FBQ25YLE9BQU8sUUFBUTtBQUNmLE9BQU8sVUFBVTtBQUNqQixTQUFTLHFCQUFxQjtBQUhrTSxJQUFNLDJDQUEyQztBQVFqUixlQUFPLGVBQXNDLFFBQVE7QUFDakQsUUFBTSxLQUFLLElBQUksT0FBTyxNQUFNO0FBQzVCLFFBQU0sTUFBTSxLQUFLLFFBQVEsY0FBYyx3Q0FBZSxHQUFHLGVBQWU7QUFDeEUsTUFBSSxNQUFNLEdBQUcsTUFBTSxLQUFLO0FBQUEsSUFDcEIsV0FBVTtBQUFBLEVBQ2QsQ0FBQztBQUNELGlCQUFlLEtBQUssS0FBSTtBQUNwQixVQUFNLE1BQU0sRUFBRSxTQUFTLE1BQU0sS0FBSyxHQUFHO0FBQ3JDLFFBQUcsQ0FBQyxJQUFJLFNBQVMsT0FBTztBQUFHO0FBQzNCLFVBQU0sT0FBTyxNQUFNLEdBQUcsTUFBTSxLQUFLLFFBQVEsS0FBSyxFQUFFLFFBQVEsQ0FBQztBQUN6RCxPQUFHLE1BQU0sS0FBSyxXQUFXO0FBQUEsTUFDckIsR0FBRztBQUFBLE1BQUcsU0FBUSxLQUFLO0FBQUEsSUFDdkIsQ0FBQztBQUFBLEVBQ0w7QUFDSjs7O0FEakJBLElBQU8sc0JBQVE7QUFBQSxFQUNkLE9BQU87QUFBQSxJQUNOLFFBQVE7QUFBQSxFQUNUO0FBQUEsRUFFQSxVQUFVO0FBQUEsRUFFVixTQUFTO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVjtBQUFBLE1BQ0MsTUFBTTtBQUFBLE1BQ04saUJBQWlCLENBQUMsV0FBVztBQUM1QixlQUFPLFlBQVksSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTO0FBQzNDLGNBQUksVUFBVSxnQ0FBZ0MsY0FBYztBQUM1RCxjQUFJLFVBQVUsOEJBQThCLGFBQWE7QUFDekQsY0FBSSxVQUFVLGdDQUFnQyxjQUFjO0FBQzVELGNBQUksVUFBVSxxQkFBcUIsR0FBRztBQUN0QyxlQUFLO0FBQUEsUUFDTixDQUFDO0FBQUEsTUFDRjtBQUFBLE1BQUUsd0JBQXdCLENBQUMsV0FBVztBQUNyQyxlQUFPLFlBQVksSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTO0FBQzNDLGNBQUksVUFBVSxnQ0FBZ0MsY0FBYztBQUM1RCxjQUFJLFVBQVUsOEJBQThCLGFBQWE7QUFDekQsY0FBSSxVQUFVLGdDQUFnQyxjQUFjO0FBQzVELGNBQUksVUFBVSxxQkFBcUIsR0FBRztBQUN0QyxlQUFLO0FBQUEsUUFDTixDQUFDO0FBQUEsTUFDRjtBQUFBLElBQ0Q7QUFBQSxJQUNBO0FBQUEsTUFDQyxNQUFNO0FBQUEsTUFDTixnQkFBZ0IsUUFBUTtBQUN2Qix1QkFBZ0IsT0FBTyxVQUFVO0FBQUEsTUFDbEM7QUFBQSxJQUNEO0FBQUEsRUFDRDtBQUFBLEVBRUEsUUFBUTtBQUFBLElBQ1AsSUFBSTtBQUFBLE1BQ0gsT0FBTyxDQUFDQyxNQUFLLFFBQVEsT0FBTyxDQUFDO0FBQUEsSUFDOUI7QUFBQSxJQUNBLE9BQU87QUFBQSxNQUNOLFNBQVMsQ0FBQyxlQUFlLGVBQWU7QUFBQSxJQUN6QztBQUFBLEVBQ0Q7QUFBQSxFQUVBLEtBQUs7QUFBQSxJQUNKLFlBQVksQ0FBQyxvQkFBb0I7QUFBQSxFQUNsQztBQUFBLEVBRUEsY0FBYztBQUFBLElBQ2IsU0FBUyxDQUFDLG9CQUFvQjtBQUFBLEVBQy9CO0FBQ0Q7IiwKICAibmFtZXMiOiBbInBhdGgiLCAicGF0aCJdCn0K
