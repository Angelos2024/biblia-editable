self.addEventListener("install", (e) => {
  e.waitUntil(
    (async () => {
      const cache = await caches.open("biblia-cache-v2");
      const archivos = [
        "./index.html?homescreen=1",
        "app.js",
        "drive.js",
        "import_export.js",
        "notas.js",
        "icon-192.png",
        "icon-512.png"
      ];

      for (const archivo of archivos) {
        try {
          await cache.add(archivo);
          console.log("✅ Cacheado:", archivo);
        } catch (err) {
          console.warn("❌ No se pudo cachear:", archivo, err);
        }
      }
    })()
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((r) => r || fetch(e.request))
  );
});
window.verificarContrasena = verificarContrasena;
window.importarVersion = importarVersion;
window.exportarVersion = exportarVersion;
