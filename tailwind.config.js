const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require("daisyui")],
    daisyui: {
        styled: true,
        themes: [
            {
                mytheme: {

                    fontFamily: "Montserrat",
                    primary: "#D64544",
                    "primary-focus": "#8B0304",
                    "primary-content": "#ffffff",
                    secondary: "#F0504E",
                    "secondary-focus": "#8B0304",
                    "secondary-content": "#ffffff",
                    accent: "#2873AC",
                    "accent-focus": "#274B75",
                    "accent-content": "#FFFFFF",
                    neutral: "#3D4451",
                    "base-100": "#FFFFFF",
                },
            },
        ],
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        prefix: "",
    },
};
