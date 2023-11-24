import "./header.css";

export default function Header() {
    const menuNav = ["Home", "About us", "Login"];

    return (
        <div className = "nav">
            <ul>
                {
                    menuNav.map((link, index) => (
                        <div>
                            {console.log(link)}
                            {link}
                        </div>
                    ))
                }
            </ul>
        </div>
    )


}