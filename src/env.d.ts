interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    readonly DEV: boolean
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }