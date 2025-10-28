import lightMan from "../../assets/man/light_man.webp"
import darkMan from "../../assets/man/dark_man.webp"
import type {MainProps} from "../helps/propsInterfaces.ts";
import {useNavigate} from "react-router-dom";

export default function BigField({isDark} : MainProps) {
    const Man = isDark ? darkMan : lightMan;
    const navigate = useNavigate();
    return (
        <section id="container" className="relative min-h-[400px] h-fit flex justify-between gap-[20px] pField">
            <div className="w-[40%] mt-[70px] ml-[150px] pFieldInf">
                <h1 className="text-[83px] mb-[10px] pFieldH1">Быстрые займы <span id="colored">онлайн</span></h1>
                <p className="pFieldP">Моментальное одобрение заявки, а для рассмотрения достаточно паспорта</p>
                <button onClick={() => navigate(`/form`)} className="text-[#fff] cursor-pointer border-0 rounded-[4px] text-[24px] w-[160px] h-[70px] my-[60px] pFieldBut"> Оформить</button>
            </div>
            <img src={Man} id="man" alt="" style={{height: `inherit`}} className="mr-[100px] max-w-[60%] object-contain absolute bottom-[0px] right-[0px] pFieldImg"/>
        </section>
    )
}