self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("biblia-cache-v1").then((cache) => {
      return cache.addAll([
        "index.html",
        "app.js",
        "drive.js",
        "import_export.js",
        "notas.js",
        "icon-192.png",
        "icon-512.png",
        "style.css"
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((r) => r || fetch(e.request))
  );
});
