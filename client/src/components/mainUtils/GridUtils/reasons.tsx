import type {MainProps} from "../../helps/propsInterfaces.ts";
import darkReasons from "../../../assets/reasons/dark_reasons.svg"
import lightReasons from "../../../assets/reasons/light_reasons.svg"


export default function Reasons({isDark} : MainProps)  {
    const svg = isDark ? darkReasons : lightReasons;
    return (
        <>
            <div className="flex flex-col items-center justify-center text-center">
                <img src={svg} alt="" className="reasonsImg w-[150px] h-auto mb-[10px]"/>
                <h2 className="reasonsH2 text-center text-[50px] mb-[20px]">Почему выбирают нас?</h2>
            </div>
            <ul className="list-none p-0 text-[18px] [&>li]:mb-[18px]">
                <li className="reasonsLi">Одобряем быстрее, чем ты успеешь сказать "грабёж".</li>
                <li className="reasonsLi">Процентная ставка выше, чем твои мечты.</li>
                <li className="reasonsLi">Не спрашиваем, на что берёшь – нам важны только проценты.</li>
                <li className="reasonsLi">Деньги сразу на карту, а душевные страдания – в подарок.</li>
                <li className="reasonsLi">Работаем круглосуточно, потому что хотим твои деньги всегда.</li>
                <li className="reasonsLi">У нас всё честно: берёшь немного – отдаёшь в разы больше.</li>
                <li className="reasonsLi">Ты нам должен ещё до оформления заявки.</li>
            </ul>
        </>
    )
}