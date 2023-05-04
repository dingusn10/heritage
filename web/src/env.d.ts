/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly PUBLIC_PCO_KEY: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
