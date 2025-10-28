import React from "react";

type PromoCardProps = {
    imageSrc: string;
    description: string;
};

const FIXED_URL = "https://www.mos.ru/news/item/113687073/";

const PromoCard: React.FC<PromoCardProps> = ({
                                                 imageSrc,
                                                 description,
                                             }) => {
    const handleClick = () => {
        window.open(FIXED_URL, "_blank", "noopener,noreferrer");
    };

    return (
        <article
            onClick={handleClick}
            id="container"
            className="ad cursor-pointer flex flex-col items-center text-center p-[15px] rounded-[15px] max-h-[300px] content-between gap-[10px]">
            <img
                src={imageSrc}
                className="adImg max-w-[70%] max-h-[80%] h-auto object-cover rounded-[5px]"
                alt=""
            />
            <p className="adP mt-[10px] text-[14px]">{description}</p>
        </article>
    );
};

export default PromoCard;
