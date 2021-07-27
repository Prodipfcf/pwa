self.addEventListener("install", e => {
    console.log("install");
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "../cdnjs.cloudflate.com/ajax/libs/font-awesome/5.15.1/css/all.min.css", "https://1.bp.blogspot.com/-mGJ8EqXHvGI/YQBCXgBUMAI/AAAAAAAAAAM/wQ6vgO07bx8QLAKR7HOKmdtj3EQ-nqVegCLcBGAsYHQ/s192/android-chrome-192x192.png"])
        })
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});