import {StaleWhileRevalidate} from 'workbox-strategies';
import {CacheableResponsePlugin} from 'workbox-cacheable-response';
import { ExpirationPlugin } from "workbox-expiration";

workbox.routing.registerRoute(
  ({url}) => url.origin === 'https://api.thiti.live' &&
    url.pathname.startsWith('/api/v1/accounts/forgot-password'),
  new StaleWhileRevalidate({
    cacheName: 'test-api-response',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({maxEntries: 5}),
    ]
  })
);