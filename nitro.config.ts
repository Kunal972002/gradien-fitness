import { defineNitroConfig } from 'nitropack/config'

export default defineNitroConfig({
  preset: 'vercel',
  handlers: [
    {
      route: '/**',
      handler: './dist/server/server.js'
    }
  ],
  publicAssets: [
    {
      dir: 'public',
      baseURL: '/'
    },
    {
      dir: 'dist/client',
      baseURL: '/'
    }
  ]
})
