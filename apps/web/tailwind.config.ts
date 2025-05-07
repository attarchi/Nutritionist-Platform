import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'leaf-green': '#1D6A32',
                'light-apple-green': '#88B04B',
                'dark-outline-green': '#0F3D23',
                'background': '#FAF8F5',
                'light-gray': '#E2E2E0',
                'medium-gray': '#9A9A98',
                'dark-gray': '#4A4A48',
                'success': '#2E7D32',
                'warning': '#ED8936',
                'error': '#D32F2F',
                'info': '#2B6CB0',
            },
        },
    },
    plugins: [],
}

export default config 