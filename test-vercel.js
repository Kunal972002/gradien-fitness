import { build } from 'vite';

async function run() {
  process.env.NITRO_PRESET = 'vercel';
  await build({
    configFile: 'vite.config.test.ts'
  });
}
run();
