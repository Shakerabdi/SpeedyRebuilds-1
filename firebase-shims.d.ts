declare module 'firebase/app' {
  export const initializeApp: (config: Record<string, string | undefined>) => unknown;
}

declare module 'firebase/firestore' {
  export const getFirestore: (app?: unknown) => unknown;
  export const collection: (db: unknown, name: string) => unknown;
  export const addDoc: (ref: unknown, data: Record<string, unknown>) => Promise<unknown>;
  export const serverTimestamp: () => unknown;
}
