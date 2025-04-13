self.addEventListener("install", (e) => {
  e.waitUntil(
    (async () => {
      const cache = await caches.open("biblia-cache-v1");
      const archivos = [
        "index.html",
        "app.js",
        "drive.js",
        "import_export.js",
        "notas.js",
        "icon-192.png",
        "icon-512.png",
        "style.css"
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
