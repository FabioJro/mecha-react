import Style from "./header.module.css";
import { Link } from "react-router-dom";
export default function Header() {
    const menuNav = ["Home", "AboutUs", "Login"];

    return (
        <header className = {Style.cabecalho}>
            <nav className={Style.nav}>

                <ul className={Style.ul}>
                    {
                        menuNav.map((texto) => (
                            <Link to={`/${texto.toLowerCase()}`}>
                                <li className={Style.li}>
                                    <a className={Style.p}>{texto}</a>
                                </li>
                            </Link>
                        ))
                    }
                </ul>

            </nav>
        </header>
    )


}