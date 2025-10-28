import darkFeedback from "../../../assets/feedback/dark_feedback.svg"
import lightFeedback from "../../../assets/feedback/light_feedback.svg"
import type {MainProps} from "../../helps/propsInterfaces.ts";

export default function Feedback({isDark} : MainProps) {
    const svg = isDark ? darkFeedback : lightFeedback;

    return (
        <>
            <div className="flex flex-col items-center justify-center text-center">
                <img src={svg} alt="" className="feedbackImg w-[150px] h-auto mb-[10px]"/>
                <h2 className="feedbackH2 text-center text-[50px] mb-[20px]">Отзывы наших клиентов</h2>
            </div>
            <article className="mb-[10px]">
                <blockquote className="feedbackBQ text-[18px] pl-[5px]">"Думал, что деньги пришли в деньгах, а они в цифрах... теперь живу с этим!"</blockquote>
                <p className="feedbackP">— Дмитрий В.</p>
            </article>
            <article className="mb-[10px]">
                <blockquote className="feedbackBQ text-[18px] pl-[5px]">"Взяла займ, а потом подумала: может, это была шутка? Но деньги пришли, теперь на счету 5
                    рублей."
                </blockquote>
                <p className="feedbackP">— Ольга Р.</p>
            </article>
            <article className="mb-[10px]">
                <blockquote className="feedbackBQ text-[18px] pl-[5px]">"Домашние деньги – как бабушка с пирогами, всегда вовремя и по делу!"</blockquote>
                <p className="feedbackP">— Алексей Т.</p>
            </article>
            <article className="mb-[10px]">
                <blockquote className="feedbackBQ text-[18px] pl-[5px]">"Если бы все так быстро давали деньги, я бы уже была миллионером!"</blockquote>
                <p className="feedbackP">— Елена С.</p>
            </article>
        </>
    )
}