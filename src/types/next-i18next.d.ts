declare module 'next-i18next/pages' {
  export const appWithTranslation: (app: any) => any;
}

declare module 'next-i18next/pages/serverSideTranslations' {
  export const serverSideTranslations: (locale: string, namespaces?: string[]) => Promise<any>;
}
