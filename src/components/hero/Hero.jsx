import heroImage2 from '../../assets/heroImage2.webp';
import heroimagenew from '../../assets/heroimagenew.webp'
import heroimage1 from'../../assets/heroimage1.jpeg';
import heroImg from '../../assets/heroImg.webp'
import Button from "../button/Button";
import "./Hero.scss";
import {motion} from 'framer-motion'

const Hero = () => {
    return (
      <main className="hero">
        <motion.div
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          className="hero-text"
        >
          <h1>
            We are
            <br />
            <p>
              tech<span>Reliable</span>
            </p>
          </h1>
          <p className="hero-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium, perspiciatis, dolorem asperiores quibusdam, maxime
            voluptate omnis molestias nesciunt iure ipsam non pariatur sed odit
            rerum laudantium veniam! Non, aut reiciendis?
          </p>
          <Button content="Send Us Message" />
        </motion.div>
        <div className="right-container">
          <motion.div
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            className="img-container"
          >
            <div>
              <div className="flex-container-1">
                <div className="container-1-div-1">
                  <img className="img" src={heroImage2} alt="" />
                </div>
                <div className="container-1-div-2">
                  <img className="img" src={heroimage1} alt="" />
                </div>
              </div>
              <div className="flex-container-2">
                <div className="container-2-div-1">
                  <img className="img" src={heroImg} alt="" />
                </div>
                <div className="container-2-div-2">
                  <img className="img" src={heroimagenew} alt="" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    );
};

export default Hero;
