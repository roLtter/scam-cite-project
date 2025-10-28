import oldMan from "../../../assets/ads/old_man.webp"
import myasnikov1 from "../../../assets/ads/myasnikov1.webp"
import violetPlant from "../../../assets/ads/violet_plant.webp"
import fungus from "../../../assets/ads/fungus.webp"
import plantain from "../../../assets/ads/plantain.webp"
import myasnikov2 from "../../../assets/ads/myasnikov2.webp"
import diabetes from "../../../assets/ads/diabetes.webp"
import mushroom from "../../../assets/ads/mushroom.webp"
import PromoCard from "./ad.tsx";

export default function Ads()  {

    return (
        <>
            <PromoCard
                imageSrc={oldMan}
                description="Старец предсказал имя следующего президента. Держитесь крепче, ведь это..."
            />
            <PromoCard
                imageSrc={myasnikov1}
                description='А.Мясников: "Шум и звон в голове - признак инсульта! Пока не лопнул сосуд, срочно пейте
                    крепкий..."'
            />
            <PromoCard
                imageSrc={violetPlant}
                description="Природный чистильщик сосудов, уже на утро из вас вылезут 7 кг бляшек, а давление будет 120/80
                    всегда!"
            />
            <PromoCard
                imageSrc={fungus}
                description="Никакой грибок ногтей не выживет! Несколько дней наносите на ногти обычный..."
            />
            <PromoCard
                imageSrc={plantain}
                description="У врачей г.Москва паника! Нашли продукт, который очищает сосуды за ночь! Запиши рецепт..."
            />
            <PromoCard
                imageSrc={myasnikov2}
                description='Мясников: "Сколько можно повторять? Тромбы пулей вылетят, сосуды очистятся - если на пустой желудок
            выпивать 1 ст.л.."'
            />
            <PromoCard
                imageSrc={diabetes}
                description='Диабетикам можно есть все! Врачи нашли "основного врага" сахарного диабета, им оказался...'
            />
            <PromoCard
                imageSrc={mushroom}
                description="Всем у кого запоры - срочно читайте! Медики встали в ступор - это раз и навсегда избавит вас от
                    запоров..."
            />
        </>
    )
}