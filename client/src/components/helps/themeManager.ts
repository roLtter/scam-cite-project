export const getStoredTheme = (): boolean => {
    return localStorage.getItem("isDark") === "true";
};

export const storeTheme = (isDark: boolean) => {
    localStorage.setItem("isDark", String(isDark));
};
