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
  ],
  // Prune the bundle to stay under Vercel's 50MB limit
  externals: {
    external: [
      'typescript',
      'eslint',
      'vite',
      'nitropack',
      'prettier',
      '@babel/core',
      'fsevents'
    ]
  }
})
