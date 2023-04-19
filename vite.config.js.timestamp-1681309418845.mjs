// vite.config.js
import path2 from "path";
import { sveltekit } from "file:///C:/Users/tinti/OneDrive/%EB%B0%94%ED%83%95%20%ED%99%94%EB%A9%B4/%EC%A0%84%EB%8F%84%ED%98%84/workspace/learn.svelte.student/node_modules/.pnpm/@sveltejs+kit@1.15.0_svelte@3.58.0_vite@4.2.1/node_modules/@sveltejs/kit/src/exports/vite/index.js";

// scripts/ws.js
import { Server } from "file:///C:/Users/tinti/OneDrive/%EB%B0%94%ED%83%95%20%ED%99%94%EB%A9%B4/%EC%A0%84%EB%8F%84%ED%98%84/workspace/learn.svelte.student/node_modules/.pnpm/socket.io@4.6.1/node_modules/socket.io/wrapper.mjs";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
var __vite_injected_original_import_meta_url = "file:///C:/Users/tinti/OneDrive/%EB%B0%94%ED%83%95%20%ED%99%94%EB%A9%B4/%EC%A0%84%EB%8F%84%ED%98%84/workspace/learn.svelte.student/scripts/ws.js";
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiLCAic2NyaXB0cy93cy5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHRpbnRpXFxcXE9uZURyaXZlXFxcXFx1QkMxNFx1RDBENSBcdUQ2NTRcdUJBNzRcXFxcXHVDODA0XHVCM0M0XHVENjA0XFxcXHdvcmtzcGFjZVxcXFxsZWFybi5zdmVsdGUuc3R1ZGVudFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcdGludGlcXFxcT25lRHJpdmVcXFxcXHVCQzE0XHVEMEQ1IFx1RDY1NFx1QkE3NFxcXFxcdUM4MDRcdUIzQzRcdUQ2MDRcXFxcd29ya3NwYWNlXFxcXGxlYXJuLnN2ZWx0ZS5zdHVkZW50XFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy90aW50aS9PbmVEcml2ZS8lRUIlQjAlOTQlRUQlODMlOTUlMjAlRUQlOTklOTQlRUIlQTklQjQvJUVDJUEwJTg0JUVCJThGJTg0JUVEJTk4JTg0L3dvcmtzcGFjZS9sZWFybi5zdmVsdGUuc3R1ZGVudC92aXRlLmNvbmZpZy5qc1wiO2ltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgeyBzdmVsdGVraXQgfSBmcm9tICdAc3ZlbHRlanMva2l0L3ZpdGUnO1xyXG5pbXBvcnQgV2Vic29ja2V0U2VydmVyIGZyb20gJy4vc2NyaXB0cy93cy5qcyc7XHJcblxyXG4vKiogQHR5cGUge2ltcG9ydCgndml0ZScpLlVzZXJDb25maWd9ICovXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRidWlsZDoge1xyXG5cdFx0dGFyZ2V0OiAnZXNuZXh0J1xyXG5cdH0sXHJcblxyXG5cdGxvZ0xldmVsOiAnaW5mbycsXHJcblxyXG5cdHBsdWdpbnM6IFtcclxuXHRcdHN2ZWx0ZWtpdCgpLFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImNvbmZpZ3VyZS1yZXNwb25zZS1oZWFkZXJzXCIsXHJcblx0XHRcdGNvbmZpZ3VyZVNlcnZlcjogKHNlcnZlcikgPT4ge1xyXG5cdFx0XHRcdHNlcnZlci5taWRkbGV3YXJlcy51c2UoKF9yZXEsIHJlcywgbmV4dCkgPT4ge1xyXG5cdFx0XHRcdFx0cmVzLnNldEhlYWRlcihcIkNyb3NzLU9yaWdpbi1FbWJlZGRlci1Qb2xpY3lcIiwgXCJyZXF1aXJlLWNvcnBcIik7XHJcblx0XHRcdFx0XHRyZXMuc2V0SGVhZGVyKFwiQ3Jvc3MtT3JpZ2luLU9wZW5lci1Qb2xpY3lcIiwgXCJzYW1lLW9yaWdpblwiKTtcclxuXHRcdFx0XHRcdHJlcy5zZXRIZWFkZXIoJ0Nyb3NzLU9yaWdpbi1SZXNvdXJjZS1Qb2xpY3knLCAnY3Jvc3Mtb3JpZ2luJyk7XHJcblx0XHRcdFx0XHRyZXMuc2V0SGVhZGVyKCd4LW1pZGRsZXdhcmUtbmV4dCcsICcxJyk7XHJcblx0XHRcdFx0XHRuZXh0KCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sY29uZmlndXJlUHJldmlld1NlcnZlcjogKHNlcnZlcikgPT4ge1xyXG5cdFx0XHRcdHNlcnZlci5taWRkbGV3YXJlcy51c2UoKF9yZXEsIHJlcywgbmV4dCkgPT4ge1xyXG5cdFx0XHRcdFx0cmVzLnNldEhlYWRlcihcIkNyb3NzLU9yaWdpbi1FbWJlZGRlci1Qb2xpY3lcIiwgXCJyZXF1aXJlLWNvcnBcIik7XHJcblx0XHRcdFx0XHRyZXMuc2V0SGVhZGVyKFwiQ3Jvc3MtT3JpZ2luLU9wZW5lci1Qb2xpY3lcIiwgXCJzYW1lLW9yaWdpblwiKTtcclxuXHRcdFx0XHRcdHJlcy5zZXRIZWFkZXIoJ0Nyb3NzLU9yaWdpbi1SZXNvdXJjZS1Qb2xpY3knLCAnY3Jvc3Mtb3JpZ2luJyk7XHJcblx0XHRcdFx0XHRyZXMuc2V0SGVhZGVyKCd4LW1pZGRsZXdhcmUtbmV4dCcsICcxJyk7XHJcblx0XHRcdFx0XHRuZXh0KCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnd2ViU29ja2V0U2VydmVyJyxcclxuXHRcdFx0Y29uZmlndXJlU2VydmVyKHNlcnZlcikge1xyXG5cdFx0XHRcdFdlYnNvY2tldFNlcnZlcihzZXJ2ZXIuaHR0cFNlcnZlcik7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRdLFxyXG5cclxuXHRzZXJ2ZXI6IHtcclxuXHRcdGZzOiB7XHJcblx0XHRcdGFsbG93OiBbcGF0aC5yZXNvbHZlKCcuYXBwcycpXVxyXG5cdFx0fSxcclxuXHRcdHdhdGNoOiB7XHJcblx0XHRcdGlnbm9yZWQ6IFsnKiovLmFwcHMvKionLCAnKiovY29udGVudC8qKiddXHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0c3NyOiB7XHJcblx0XHRub0V4dGVybmFsOiBbJ0BzdmVsdGVqcy9zaXRlLWtpdCddXHJcblx0fSxcclxuXHJcblx0b3B0aW1pemVEZXBzOiB7XHJcblx0XHRleGNsdWRlOiBbJ0BzdmVsdGVqcy9zaXRlLWtpdCddXHJcblx0fVxyXG59O1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHRpbnRpXFxcXE9uZURyaXZlXFxcXFx1QkMxNFx1RDBENSBcdUQ2NTRcdUJBNzRcXFxcXHVDODA0XHVCM0M0XHVENjA0XFxcXHdvcmtzcGFjZVxcXFxsZWFybi5zdmVsdGUuc3R1ZGVudFxcXFxzY3JpcHRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx0aW50aVxcXFxPbmVEcml2ZVxcXFxcdUJDMTRcdUQwRDUgXHVENjU0XHVCQTc0XFxcXFx1QzgwNFx1QjNDNFx1RDYwNFxcXFx3b3Jrc3BhY2VcXFxcbGVhcm4uc3ZlbHRlLnN0dWRlbnRcXFxcc2NyaXB0c1xcXFx3cy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvdGludGkvT25lRHJpdmUvJUVCJUIwJTk0JUVEJTgzJTk1JTIwJUVEJTk5JTk0JUVCJUE5JUI0LyVFQyVBMCU4NCVFQiU4RiU4NCVFRCU5OCU4NC93b3Jrc3BhY2UvbGVhcm4uc3ZlbHRlLnN0dWRlbnQvc2NyaXB0cy93cy5qc1wiO2ltcG9ydCB7IFNlcnZlciB9IGZyb20gJ3NvY2tldC5pbyc7XHJcbmltcG9ydCBmcyBmcm9tICdmcy9wcm9taXNlcyc7XHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSAndXJsJztcclxuLyoqXHJcbiAqIFxyXG4gKiBAcGFyYW0ge2ltcG9ydCgndml0ZScpLlZpdGVEZXZTZXJ2ZXJ9IHNlcnZlciBcclxuKi9cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaW5qZWN0U29ja2V0SU8oc2VydmVyKSB7XHJcbiAgICBjb25zdCBpbyA9IG5ldyBTZXJ2ZXIoc2VydmVyKTtcclxuICAgIGNvbnN0IGRpciA9IHBhdGgucmVzb2x2ZShmaWxlVVJMVG9QYXRoKGltcG9ydC5tZXRhLnVybCksICcuLi8uLi9jb250ZW50Jyk7XHJcbiAgICBsZXQgcHJvID0gZnMud2F0Y2goZGlyLCB7XHJcbiAgICAgICAgcmVjdXJzaXZlOnRydWUsXHJcbiAgICB9KTtcclxuICAgIGZvciBhd2FpdCAobGV0IGkgb2YgcHJvKXtcclxuICAgICAgICBjb25zdCBhcnIgPSBpLmZpbGVuYW1lLnNwbGl0KHBhdGguc2VwKTtcclxuICAgICAgICBpZighYXJyLmluY2x1ZGVzKCdhcHAtYicpKSBjb250aW51ZTtcclxuICAgICAgICBjb25zdCBzdGF0ID0gYXdhaXQgZnMubHN0YXQocGF0aC5yZXNvbHZlKGRpciwgaS5maWxlbmFtZSkpXHJcbiAgICAgICAgaW8ubG9jYWwuZW1pdCgnbWVzc2FnZScsIHtcclxuICAgICAgICAgICAgLi4uaSwgbXRpbWVNczpzdGF0Lm10aW1lTXNcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSJdLAogICJtYXBwaW5ncyI6ICI7QUFBNGIsT0FBT0EsV0FBVTtBQUM3YyxTQUFTLGlCQUFpQjs7O0FDRDBhLFNBQVMsY0FBYztBQUMzZCxPQUFPLFFBQVE7QUFDZixPQUFPLFVBQVU7QUFDakIsU0FBUyxxQkFBcUI7QUFIa08sSUFBTSwyQ0FBMkM7QUFRalQsZUFBTyxlQUFzQyxRQUFRO0FBQ2pELFFBQU0sS0FBSyxJQUFJLE9BQU8sTUFBTTtBQUM1QixRQUFNLE1BQU0sS0FBSyxRQUFRLGNBQWMsd0NBQWUsR0FBRyxlQUFlO0FBQ3hFLE1BQUksTUFBTSxHQUFHLE1BQU0sS0FBSztBQUFBLElBQ3BCLFdBQVU7QUFBQSxFQUNkLENBQUM7QUFDRCxpQkFBZSxLQUFLLEtBQUk7QUFDcEIsVUFBTSxNQUFNLEVBQUUsU0FBUyxNQUFNLEtBQUssR0FBRztBQUNyQyxRQUFHLENBQUMsSUFBSSxTQUFTLE9BQU87QUFBRztBQUMzQixVQUFNLE9BQU8sTUFBTSxHQUFHLE1BQU0sS0FBSyxRQUFRLEtBQUssRUFBRSxRQUFRLENBQUM7QUFDekQsT0FBRyxNQUFNLEtBQUssV0FBVztBQUFBLE1BQ3JCLEdBQUc7QUFBQSxNQUFHLFNBQVEsS0FBSztBQUFBLElBQ3ZCLENBQUM7QUFBQSxFQUNMO0FBQ0o7OztBRGpCQSxJQUFPLHNCQUFRO0FBQUEsRUFDZCxPQUFPO0FBQUEsSUFDTixRQUFRO0FBQUEsRUFDVDtBQUFBLEVBRUEsVUFBVTtBQUFBLEVBRVYsU0FBUztBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1Y7QUFBQSxNQUNDLE1BQU07QUFBQSxNQUNOLGlCQUFpQixDQUFDLFdBQVc7QUFDNUIsZUFBTyxZQUFZLElBQUksQ0FBQyxNQUFNLEtBQUssU0FBUztBQUMzQyxjQUFJLFVBQVUsZ0NBQWdDLGNBQWM7QUFDNUQsY0FBSSxVQUFVLDhCQUE4QixhQUFhO0FBQ3pELGNBQUksVUFBVSxnQ0FBZ0MsY0FBYztBQUM1RCxjQUFJLFVBQVUscUJBQXFCLEdBQUc7QUFDdEMsZUFBSztBQUFBLFFBQ04sQ0FBQztBQUFBLE1BQ0Y7QUFBQSxNQUFFLHdCQUF3QixDQUFDLFdBQVc7QUFDckMsZUFBTyxZQUFZLElBQUksQ0FBQyxNQUFNLEtBQUssU0FBUztBQUMzQyxjQUFJLFVBQVUsZ0NBQWdDLGNBQWM7QUFDNUQsY0FBSSxVQUFVLDhCQUE4QixhQUFhO0FBQ3pELGNBQUksVUFBVSxnQ0FBZ0MsY0FBYztBQUM1RCxjQUFJLFVBQVUscUJBQXFCLEdBQUc7QUFDdEMsZUFBSztBQUFBLFFBQ04sQ0FBQztBQUFBLE1BQ0Y7QUFBQSxJQUNEO0FBQUEsSUFDQTtBQUFBLE1BQ0MsTUFBTTtBQUFBLE1BQ04sZ0JBQWdCLFFBQVE7QUFDdkIsdUJBQWdCLE9BQU8sVUFBVTtBQUFBLE1BQ2xDO0FBQUEsSUFDRDtBQUFBLEVBQ0Q7QUFBQSxFQUVBLFFBQVE7QUFBQSxJQUNQLElBQUk7QUFBQSxNQUNILE9BQU8sQ0FBQ0MsTUFBSyxRQUFRLE9BQU8sQ0FBQztBQUFBLElBQzlCO0FBQUEsSUFDQSxPQUFPO0FBQUEsTUFDTixTQUFTLENBQUMsZUFBZSxlQUFlO0FBQUEsSUFDekM7QUFBQSxFQUNEO0FBQUEsRUFFQSxLQUFLO0FBQUEsSUFDSixZQUFZLENBQUMsb0JBQW9CO0FBQUEsRUFDbEM7QUFBQSxFQUVBLGNBQWM7QUFBQSxJQUNiLFNBQVMsQ0FBQyxvQkFBb0I7QUFBQSxFQUMvQjtBQUNEOyIsCiAgIm5hbWVzIjogWyJwYXRoIiwgInBhdGgiXQp9Cg==
