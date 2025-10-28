import Reasons from "./GridUtils/reasons.tsx";
import Feedback from "./GridUtils/feedback.tsx";
import Promo from "./GridUtils/promo.tsx";
import Ads from "./GridUtils/ads.tsx";
import type {MainProps} from "../helps/propsInterfaces.ts";

export default function MainGrid({isDark} : MainProps) {
    return (
        <div className="blocks m-[3vh] grid gap-[20px] p-[20px]">
            <section className="reasons"><Reasons isDark={isDark}></Reasons></section>
            <section className="feedback"><Feedback isDark={isDark}></Feedback></section>
            <section className="promo"><Promo isDark={isDark}></Promo></section>
            <section className="ads grid grid-cols-2 gap-x-[30px] gap-y-[20px]"><Ads></Ads></section>
        </div>
    )
}