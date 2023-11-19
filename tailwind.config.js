/** @type {import('tailwindcss').Config} */
import keepPreset from "keep-react/src/keep-preset.js";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}"

  ],
  presets: [keepPreset],
  // plugins: [..., require('flowbite/plugin')],
  theme: {
    extend: {},
    theme: {
      extend: {},
    },
  },
  // plugins: [require("daisyui")],
  plugins: [require('flowbite/plugin')],
}

