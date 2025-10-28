import BigField from "./mainUtils/bigField.tsx";
import type {MainProps} from "./helps/propsInterfaces.ts";
import MainGrid from "./mainUtils/mainGrid.tsx";

export default function Main({isDark} : MainProps){
    return (
        <>
            <BigField isDark={isDark}/>
            <MainGrid isDark={isDark}/>
        </>
    )
}