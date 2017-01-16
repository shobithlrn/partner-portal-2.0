import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

// depending on the env mode, enable prod mode or add debugging modules
if (process.env.ENV === 'production' || process.env.ENV === 'staging' || process.env.ENV === 'qa') {
  enableProdMode();
}

export function main() {
  return platformBrowserDynamic().bootstrapModule(AppModule);
}

if (document.readyState === 'complete') {
  main();
} else {
  document.addEventListener('DOMContentLoaded', main);
}
