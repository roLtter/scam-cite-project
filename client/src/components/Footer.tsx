export default function Footer() {
    return (
        <footer className="w-[100%] text-center pb-[15px]">
            <p>&copy; <time dateTime="2025">2025 </time>Домашние деньги. Абсолютно все права не защищены.</p>
            <address>
                Телефон:
                <span className="inline f-hide">8-800-555-35-35</span>
                <a href="tel:88005553535" className="hidden text-[#3F92D2] f-show">8-800-555-35-35</a>
            </address>
        </footer>
    )
}