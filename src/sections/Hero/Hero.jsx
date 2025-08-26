import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg'; 
import linkedinDark from '../../assets/linkedin-dark.svg'; 
import CV from '../../assets/CV.pdf';
import { useTheme } from '../../common/ThemeContext.jsx';



function Hero() {
    const { theme, toggleTheme } = useTheme();

     
    
    const themeIcon = theme === "light" ? sun : moon;
     const twitterIcon = theme === "light" ? twitterLight : twitterDark;
      const githubIcon = theme === "light" ? githubLight : githubDark;
       const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;


  return (
     <section id="hero" className={styles.container}>

          <div className={styles.colorModeContainer}>
            <img 
                className={styles.hero}
             src={heroImg} 
             alt="profile picture of Goodness Iyamah"
              />
            <img 
            className={styles.colorMode} 
            src={themeIcon}
             alt="Color mode icon"
             onClick={toggleTheme}  
             />
          </div>
            <div className={styles.info}>
                <h1>
                    Goodness
                    <br />
                    Iyamah
                </h1>
                <h2>Smart Contract Developer(EVM)</h2>
                <h3>Software Developer | Builder</h3>
                <span>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                      <img src={twitterIcon} alt="Twitter icon" />           
                    </a>
                     <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                      <img src={githubIcon} alt="Github icon" />           
                    </a>
                     <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                      <img src={linkedinIcon} alt="Linkedin icon" />           
                    </a>
                </span>
                <p className={styles.description }>
                    With something people call a passion to build
                     what is needed - to see how much of a footprint
                      I can leave behind on Earth before i leave
                       </p>
                       <a href={CV} download>
            <button className="hover"> 
                Resume</button>

                </a>
                
            </div> 
  </section>
  
);
 
}

export default Hero;