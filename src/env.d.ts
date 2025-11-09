/// <reference path="../.astro/types.d.ts" />

declare global {
  interface Window {
    notify?: (msg: string) => void;
  }
}

export {};