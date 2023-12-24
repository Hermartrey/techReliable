import logo from '../../assets/logo.png';
import './Footer.scss'
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <a className="logo" href="/">
            <img src={logo} alt="" />
            </a>
            <p>
            © 2023 - <span>techReliable</span> All Right Reserved
            </p>
            <button>
            <a href="/">
                <span>back to top</span>
                <FaArrowUp className="arrow"/>
            </a>
            </button>
        </footer>
    );
}

export default Footer