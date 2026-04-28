import { createApp } from 'vinxi'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import tsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'

export default createApp({
  server: {
    preset: 'vercel'
  },
  routers: [
    {
      name: 'public',
      type: 'static',
      dir: './public',
      base: '/'
    },
    {
      name: 'client',
      type: 'client',
      handler: './src/entry-client.tsx',
      target: 'browser',
      plugins: () => [
        tailwindcss(),
        tsConfigPaths(),
        tanstackStart(),
      ],
    },
    {
      name: 'ssr',
      type: 'http',
      handler: './src/entry-server.tsx',
      target: 'server',
      plugins: () => [
        tailwindcss(),
        tsConfigPaths(),
        tanstackStart(),
      ],
    },
  ],
})
