// app.config.ts
import { createApp } from "vinstack";
var app_config_default = createApp({
  server: {
    preset: "vercel"
  }
});
export {
  app_config_default as default
};
