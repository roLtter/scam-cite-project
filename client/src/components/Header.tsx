import LogoLight from "../assets/logo_light.webp"
import LogoDark from "../assets/logo_dark.webp"
import '../styles/switcher.css'
import type {HeaderProps} from "./helps/propsInterfaces.ts";
import {useNavigate} from "react-router-dom";

export default function Header({ isDark, setIsDark }: HeaderProps) {
    const logo = isDark ? LogoDark : LogoLight;
    const navigate = useNavigate();
    const handleToggle = () => {
        setIsDark(!isDark);
    };

    return (
        <header className="hdr ml-[20px] flex items-center pr-[20px] gap-[10px]">
            <div className="flex flex-row items-center mt-[30px]">
                <img src={logo} alt="" className="max-w-[60px]" onClick={() => navigate('/home')}/>
                <div className="flex flex-col items-center">
                    <h2 className="hdrH2 text-center m-0">Dom<span id="colored">Deng</span></h2>
                    <h3 className="hdrH3 m-0">Быстрые займы!</h3>
                </div>
            </div>
            <address className="hdrAdress w-fit text-center flex absolute top-[3px] font-[700] text-[30px]">
                <span id="colored">8</span>-8
                <span id="colored">00</span>-5
                <span id="colored">55</span>-3
                <span id="colored">5</span>-3
                <span id="colored">5</span>
            </address>

            <div className="hdrRs mt-[10px] ml-auto mb-[10px] mr-[1vh] flex flex-col items-center content-center gap-[7px]">
                <button onClick={() => window.location.href = 'tel:+74954911125'} className="hdrBut text-[#fff] cursor-pointer border-0 rounded-[4px] text-[18px] w-[130px] h-[50px]">Связаться</button>
                <label className="switch">
                    <input type="checkbox" className="switch__input" id="theme-switcher" checked={isDark} onChange={handleToggle}/>
                    <span className="switch__slider"></span>
                </label>
            </div>
        </header>
    )
}