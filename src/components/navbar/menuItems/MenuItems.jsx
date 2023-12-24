import { useState } from "react";

const menuItems = [
    {
        path: "/",
        element: "Home",
    },
    {
        path: "#about",
        element: "About",
    },
    {
        path: "#services",
        element: "Services",
    },
    {
        path: "#contact",
        element: "contact us",
    },
];
const MenuItems = () => {
    const [menu, setMenu] = useState("/");

    const navbarMenu = (path) => {
        setMenu(path);
    };

    return (
        <ul className="navigation">
            {menuItems.map((item, i) => {
                return (
                    <li key={i}>
                        <a
                            className={"link"}
                            href={item.path}
                            onClick={() => {
                                navbarMenu(item.path);
                            }}
                        >
                            {item.element}
                        </a>
                    </li>
                );
            })}
        </ul>
    );
};

export default MenuItems;
