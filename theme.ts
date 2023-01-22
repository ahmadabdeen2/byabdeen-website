import { buildLegacyTheme } from "sanity";

const props = {
    "--my-white": "#e5e5e7",
    "--my-black": "#171717",
    "--my-blue": "#0A27F1",
    "--my-red": "#FF0000",
    "--my-green": "#00FF00",
    "--my-yellow": "#FFFF00",
}

export const myTheme = buildLegacyTheme({
    "--black": props["--my-black"],
    "--white": props["--my-white"],
    "--component-bg": props["--my-white"],
    "--component-text-color": props["--my-black"],

    "--brand-primary": props["--my-blue"],

    "--default-button-color": props["--my-blue"],
    "--default-button-primary-color": props["--my-white"],
    "--default-button-success-color": props["--my-green"],
    "--default-button-danger-color": props["--my-red"],
    "--default-button-warning-color": props["--my-yellow"],

    "--main-navigation-color": props["--my-blue"],

    "--focus-color": props["--my-blue"],
    

});
