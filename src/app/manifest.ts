import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Next.js PWA',
        short_name: 'NextPWA',
        description: 'A Progressive Web App built with Next.js',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        orientation: "portrait",
        id: "/",
        icons: [
            {
                src: '/icon-192x192.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: "maskable",
            },
            {
                src: '/icon-512x512.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
        screenshots: [
            {
                src: "/screenshot-1.png",
                sizes: "1280x719",
                type: "image/png",
                form_factor: "wide",
            },
            {
                src: "/screenshot-2.png",
                sizes: "720x720",
                type: "image/png",
            },
        ],
        display_override: ["window-controls-overlay"],
    }
}