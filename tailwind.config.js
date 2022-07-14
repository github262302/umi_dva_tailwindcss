const colors = require("tailwindcss/colors");
module.exports = {
    content: [
        "./src/pages/**/*.tsx",
        "./src/components/**.tsx",
        "./src/components/**/*.tsx",
        "./src/layouts/**.tsx",
    ],
    theme: {
        screens: {
            sm: "480px",
            md: "768px",
            lg: "976px",
            xl: "1440px",
        },

        fontFamily: {
            sans: ["Graphik", "sans-serif"],
            serif: ["Merriweather", "serif"],
        },
        extend: {
            spacing: {
                128: "32rem",
                144: "36rem",
            },
            borderRadius: {
                "4xl": "2rem",
            },
        },
    },
    plugins: [
        // ...
        require("@tailwindcss/forms")({
            strategy: "class",
        }),
    ],
};
