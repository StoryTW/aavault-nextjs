import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Palma Network',
    short_name: 'PALMA',
    description: 'Multi-blockchain platform',
    start_url: '/',
    display: 'standalone',
    background_color: '#090909',
    theme_color: '#000000',
    icons: [
      {
        src: 'images/manifest/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'images/manifest/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
