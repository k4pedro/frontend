/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: "inter",
            },
            boxShadow: {
                shape: '8px 8px 8px rgba(0, 0, 0, 0.1), 8px 4px 4px rgba(0, 0, 0, 0.1), 8px 8px 8px rgba(0, 0, 0, 0.1),8px 2px 2px rgba(0, 0, 0, 0.1), 8px 8px 8px 1px rgba(0, 0, 0, 0.1),inset 8px 8px 0px rgba(255, 255, 255, 0.03),inset 0px 1px 0px rgba(255, 255, 255, 0.03)'
            },
        },
    },
    plugins: [],
}
