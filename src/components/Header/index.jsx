import Style from "./header.module.css";
export default function Header() {
    const menuNav = ["Home", "About us", "Login"];

    return (
        <nav className={Style.nav}>
            <div >
                <ul className={Style.ul}>
                    {
                        menuNav.map((link) => (
                            <div>
                                {console.log(link)}
                                {link}
                            </div>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )


}