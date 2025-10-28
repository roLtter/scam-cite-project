import type {MainProps} from "../../helps/propsInterfaces.ts";
import darkPromo from "../../../assets/promo/dark_promo.svg"
import lightPromo from "../../../assets/promo/light_promo.svg"

export default function Promo({isDark} : MainProps) {
    const svg = isDark ? darkPromo : lightPromo;

    return (
        <>
            <div className="flex flex-col items-center justify-center text-center">
                <img src={svg} alt="" className="promoImg w-[150px] h-auto mb-[10px]"/>
                <h2 className="promoH2 text-center text-[50px] mb-[20px]">Отзывы наших клиентов</h2>
            </div>
            <details className="promoDet mb-[7px] text-[18px]">
                <summary>Первый займ — бесплатно!</summary>
                <p className="mt-[7px]">Второй — с надбавкой за первый.</p>
            </details>
            <details className="promoDet mb-[7px] text-[18px]">
                <summary>Возьми кредит на 1000₽, а верни, сколько не жалко!</summary>
                <p className="mt-[7px]">(но не меньше 1001₽)</p>
            </details>
            <details className="promoDet mb-[7px] text-[18px]">
                <summary>Испытай удачу!</summary>
                <p className="mt-[7px]">Случайная процентная ставка от 0% до 1000% годовых!</p>
            </details>
            <details className="promoDet mb-[7px] text-[18px]">
                <summary>Приведи друга — пусть он платит за тебя!</summary>
                <p className="mt-[7px]">Получите бонус, если ваш друг оформит займ.</p>
            </details>
            <details className="promoDet mb-[7px] text-[18px]">
                <summary>Бонус за доверие</summary>
                <p className="mt-[7px]">Возьми кредит и получи уникальную возможность взять ещё один!</p>
            </details>
            <details className="promoDet mb-[7px] text-[18px]">
                <summary>Первый платёж можно отложить!</summary>
                <p className="mt-[7px]">Правда, процент за просрочку начнёт капать сразу.</p>
            </details>
        </>
    )
}