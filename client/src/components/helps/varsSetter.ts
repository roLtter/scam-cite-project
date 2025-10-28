export default function setThemeVariables(isDark : boolean) {
    const darkTheme = {
        '--bg_1': '#1A1A1A',
        '--bg_2': '#2b2a2a',
        '--font_1': '#ecefe5',
        '--font_2': '#4CAF4F',
        '--button-bg': '#43A046',
        '--button-hover-bg': '#388E3B',
        '--button-focus-border': '#86dd94',
        '--button-active-bg': '#1B5E1F',
    };

    const lightTheme = {
        '--bg_1': '#fff',
        '--bg_2': '#F5F7FA',
        '--font_1': '#4D4D4D',
        '--font_2': '#da1f1f',
        '--button-bg': '#e62e2e',
        '--button-hover-bg': '#e14747',
        '--button-focus-border': '#130505',
        '--button-active-bg': '#8f1414',
    };

    const theme = isDark ? darkTheme : lightTheme;

    Object.entries(theme).forEach(([key, value]) => {
        document.documentElement.style.setProperty(key, value);
    });
};
