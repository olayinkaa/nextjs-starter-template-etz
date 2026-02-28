// env.d.ts

export {};

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NEXT_PUBLIC_APP_NAME: string;
        }
    }
}
