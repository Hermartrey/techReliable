import aboutImage from '../../assets/aboutImage.webp'
import "./About.scss";

const About = () => {
    return (
        <div id="about" className="about">
            <div
                className="about-name"
            >
                <h1>About us</h1>
            </div>

            <div
                className="about-container"
            >
                <div className="about-details">
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                    omnis totam saepe corporis reprehenderit deserunt sequi ratione.
                    Corrupti explicabo sit possimus. Eligendi, aut. Adipisci itaque
                    quo maxime voluptas sunt? Hic possimus suscipit error quasi
                    dolorum tempore nesciunt optio ipsum similique.
                    </p>
                </div>
                <div className="about-image">
                    <img src={aboutImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;
