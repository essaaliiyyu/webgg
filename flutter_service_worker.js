'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "b0f01d2336c7521971736da4cdc9193a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/am.jpg": "383c263fe8a9c9586e5282da99613910",
"assets/images/ar.jpg": "8c7c6e0f3bacd2ca39f9585b1b962b76",
"assets/images/arm.jpg": "19d984b43c5a467789156955c1303622",
"assets/images/cn1.jpg": "4391d392ae0e31b1fe4bd3c4fad9d511",
"assets/images/cn10.jpg": "20dfd10214a357c2f47efa129146dcf4",
"assets/images/cn2.jpg": "e36188d0d0b6ceac057f667711b6efe7",
"assets/images/cn3.jpg": "3b716ade381e5e3a5e457297ad5c279f",
"assets/images/cn4.jpg": "e0de84c8b1d0b6d11c3b327fdbb5f324",
"assets/images/cn5.jpg": "0a3acc23792df72d1615d1b7054cbaab",
"assets/images/cn6.jpg": "6588f6357356be744f37834c4a7b6de0",
"assets/images/cn8.jpg": "58cc7689f7e3a7217b841ee53e746af8",
"assets/images/cn9.jpg": "f3ec6dacc06ed9140e8ebd24281e7e85",
"assets/images/cr1.jpg": "14985c2a3d62211a151b6a107d82b9c8",
"assets/images/cr10.jpg": "56515c2792b90e1655aed9d9e8478bf5",
"assets/images/cr11.jpg": "a26249780497e3ab06c2b3c7dc9ebd73",
"assets/images/cr12.jpg": "6a1c5cd0919ec74d5e1f6d155921528c",
"assets/images/cr13.jpg": "b899d7a58556af505ccf86fbe501efdd",
"assets/images/cr14.jpg": "d5e24938f35bde8fb7a4d8fce7751d9a",
"assets/images/cr15.jpg": "cf89a19c387f0d033fb9e97ce9e89451",
"assets/images/cr16.jpg": "0c5fd735a5277b2c6a51c56795fbe91a",
"assets/images/cr17.jpg": "4884d4f954446c2be447cb14d819d698",
"assets/images/cr18.jpg": "138f45f5238a73e0b3725aaffcf12bc0",
"assets/images/cr19.jpg": "7288b4f2aa077c760a657d0c63ef55b1",
"assets/images/cr2.jpg": "ee75739effc53672edc228eac5b5e80b",
"assets/images/cr20.jpg": "f149aa87f93553e7d2e85684e317703c",
"assets/images/cr21.jpg": "9b5d049ef51d1323fae93e77ba4ca6d9",
"assets/images/cr22.jpg": "10338ea5057661cfb8672ac950769004",
"assets/images/cr23.jpg": "b3d1c2e1fa2758cf238fa9e34d406b12",
"assets/images/cr3.jpg": "11429babb20c83f1c7d8a27133ca6fd8",
"assets/images/cr4.jpg": "fb61f4728754813d37175efd3edcc30d",
"assets/images/cr5.jpg": "776972dced94f5e4f3e85865784b0c1b",
"assets/images/cr6.jpg": "d324382573f8de73a0eb7ad19ad6bb8c",
"assets/images/cr7.jpg": "d98ca651fadc114b27ca105f7979c7fb",
"assets/images/cr8.jpg": "4e2129dd647cd745076c880753ec0b17",
"assets/images/cr9.jpg": "657adac8c4d48e5ee5852875f0e51bfc",
"assets/images/f1.jpg": "4113faede8e4b8706567bdcc50d47b49",
"assets/images/f10.jpg": "aa37ac0bef3050d67578bda46a506745",
"assets/images/f11.jpg": "253f77c34520385a6b9ee48a9b1f4432",
"assets/images/f12.jpg": "1ec87cda44edd6f6a5b1d9a9d78766b5",
"assets/images/f13.jpg": "76b95bb220d1b0353f4fd84897e75743",
"assets/images/f2.jpg": "8fdc26faa644c6a976616d043e6ef700",
"assets/images/f3.jpg": "10260ec7162dc3bf0eca7eee692e33c4",
"assets/images/f4.jpg": "6c1e68cfc8e66ae7e8c4663a307e867a",
"assets/images/f5.jpg": "d2c64d0e9bbe95fdff9fcad6b06df9dd",
"assets/images/f6.jpg": "b3880ce6f961b8abb0cfbe31e71d5d16",
"assets/images/f7.jpg": "710e2ebae7da3d73c1f80213384a5e36",
"assets/images/f8.jpg": "a31b257a4269382eae2be0b97a6f38e8",
"assets/images/f9.jpg": "2df70164ea85dfe5cdd8b44dc0238960",
"assets/images/km.jpg": "6588f6357356be744f37834c4a7b6de0",
"assets/images/krm.jpg": "a26249780497e3ab06c2b3c7dc9ebd73",
"assets/images/t1.jpg": "7dccd3a6ae29c30b512e34b63fe4545c",
"assets/images/t2.jpg": "64c4d0873c9ab800bfff19068d9a0260",
"assets/images/tm.jpg": "1a06574678f8cfcafc47b124bb791f41",
"assets/images/w1.jpg": "87c999a334cc5b0deca5bf9e1c5bd258",
"assets/images/w10.jpg": "bb70f6d505d6c027cd1d349fd156d557",
"assets/images/w11.jpg": "1baa78f7c881ace7193f062389b51ebe",
"assets/images/w12.jpg": "3afe1c37aa898f3a59c399b1cd1ddd2a",
"assets/images/w13.jpg": "df6fb7d0e5a18a936a5dcc2b7dbbcbf5",
"assets/images/w14.jpg": "b4a3f20f034fd19a41c87c84a4032b10",
"assets/images/w15.jpg": "0cf9c4ba49154f2a215ada88bc5bb1f1",
"assets/images/w16.jpg": "0c0162f2c8d516c5998b73511baae598",
"assets/images/w2.jpg": "546835799aef462238a7227e3e12cff8",
"assets/images/w3.jpg": "0f8314867f7944b9cb4a3ee1dccd61a7",
"assets/images/w4.jpg": "99de2ce7a6d6189c41e1d627fda9f1ad",
"assets/images/w5.jpg": "12b049cbd514245b8514d2c48e57a0c6",
"assets/images/w6.jpg": "5ce621b10639a5e98f2a5a24ee1a74e2",
"assets/images/w7.jpg": "5fff0d9e16ae5974a928d02bbac01df6",
"assets/images/w8.jpg": "a8c55b28737201f2af81f703869b8ca2",
"assets/images/w9.jpg": "8f900db9684467faad713b378b728c67",
"assets/images/wm.jpg": "1baa78f7c881ace7193f062389b51ebe",
"assets/NOTICES": "8cb7ff68f0d76beb7a748de06bca7557",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ee0ad22c3098623dfa828bdc34a11e56",
"/": "ee0ad22c3098623dfa828bdc34a11e56",
"main.dart.js": "e945b9e3048932b428f8ddd8a950b7cd",
"manifest.json": "89d45a8c1390131a73dc9472864dc982",
"version.json": "7c75fe2e08e6515f8b931eff80bbbab6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
