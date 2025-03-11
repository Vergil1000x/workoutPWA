import { defaultCache } from "@serwist/next/worker";
import type { PrecacheEntry, SerwistGlobalConfig } from "serwist";
import { Serwist } from "serwist";

declare global {
    interface WorkerGlobalScope extends SerwistGlobalConfig {
        __SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
    }
}

declare const self: ServiceWorkerGlobalScope;
const langs = ["en", "de"] as const;

const serwist = new Serwist({
    precacheEntries: self.__SW_MANIFEST,
    skipWaiting: true,
    clientsClaim: true,
    navigationPreload: true,
    runtimeCaching: defaultCache,
    fallbacks: {
        entries: langs.map(lang => ({
            url: `/${lang}/~offline`,
            matcher: ({ request }: { request: Request }) => {
                const url = new URL(request.url);
                return request.destination === "document" && url.pathname.startsWith(`/${lang}`);
            }
        })),
    },
});

serwist.addEventListeners();
