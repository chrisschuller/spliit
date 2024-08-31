import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Split',
    short_name: 'Split',
    description: 'Splitwise für Arme',
    start_url: '/groups',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#893ECB',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      // {
      //   src: '/logo-512x512-maskable.png',
      //   sizes: '512x512',
      //   type: 'image/png',
      //   purpose: 'maskable',
      // },
    ],
  }
}
