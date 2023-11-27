import Style from "./header.module.css";
import { Link } from "react-router-dom";
export default function Header() {
    const menuNav = ["Home", "About-us", "Login"];

    return (
        <nav className={Style.nav}>
            <div >
                <ul className={Style.ul}>
                    {
                        menuNav.map((texto) => (
                            <Link to={`/${texto.toLowerCase()}`}>
                                <li >
                                    <p className = {Style.p}>{texto}</p>
                                </li>
                            </Link>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )


}