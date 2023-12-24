import logo from '../../assets/logo.png'
import MenuItems from './menuItems/MenuItems'
import './Nav.scss'
import {BsFacebook} from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { FaXTwitter } from 'react-icons/fa6'
import { RxHamburgerMenu } from "react-icons/rx";
import {useState} from 'react'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    const handleClick = () =>{
        setToggle(prev=>!prev)
        console.log(toggle)
    }

    return (
        <header className="header">
            <div className="header__container">
            <div className="logo">
                <a href="/">
                <img src={logo} alt="" />
                </a>
                <h2>
                tech<span>Reliable</span>
                </h2>
            </div>
            <MenuItems />
            <div className="social-medias">
                <a href="">
                <BsFacebook className="fb" />
                </a>
                <a href="">
                <BsInstagram className="inst" />
                </a>
                <a href="">
                <FaXTwitter className="x" />
                </a>
            </div>
            <div className="menu">
                <RxHamburgerMenu onClick={handleClick} />
            </div>
            </div>
            {toggle && (
            <div id="toggle" className={toggle ? "show" : "hidden"}>
                <div className="toggle-navbar">
                <span onClick={handleClick}>X</span>
                <MenuItems />
                <div className="social-medias">
                    <a href="">
                    <BsFacebook className="fb" />
                    </a>
                    <a href="">
                    <BsInstagram className="inst" />
                    </a>
                    <a href="">
                    <FaXTwitter className="x" />
                    </a>
                </div>
                </div>
            </div>
            )}
        </header>
    );
}

export default Navbar