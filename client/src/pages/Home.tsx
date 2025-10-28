import Header from "../components/Header.tsx";
import {useEffect, useState} from "react";
import "../styles/themeDependent.css"
import Footer from "../components/Footer.tsx";
import Main from "../components/Main.tsx";
import setThemeVariables from "../components/helps/varsSetter.ts";
import {getStoredTheme, storeTheme} from "../components/helps/themeManager.ts";

export default function Home() {
    const [isDark, setIsDark] = useState(getStoredTheme());

    useEffect(() => {
        storeTheme(isDark);
        setThemeVariables(isDark);
    }, [isDark]);

    return (
        <div id="form1ed">
            <Header isDark={isDark} setIsDark={setIsDark}/>
            <Main isDark={isDark} />
            <Footer />
        </div>
    )
}

