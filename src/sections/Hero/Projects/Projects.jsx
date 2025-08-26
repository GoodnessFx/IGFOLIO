import viberr from '../../../assets/viberr.png';
import styles from "./ProjectsStyles.module.css";
import hipster from "../../../assets/hipsster.png";
import freshBurger from "../../../assets/fresh-burger.png";
import fitlift from "../../../assets/fitlift.png";
import ProjectCard from '../../../common/ProjectCard.jsx';
function Projects() {
  return ( <section id="projects"  className={StyleSheet.container}>
    <h1 className="sectionTitle">Projects</h1>
    <div className={styles.projectsContainer}>
      < ProjectCard src={viberr} link="https://github.com/Ade-mir/
          company-landing-page-2" h3="Viberr"
          p="Streaming App"/>

          < ProjectCard src={freshBurger} link="https://github.com/Ade-mir/
          company-landing-page-2" h3="Fresh Burger"
          p="Hamburger-Restaurant"/>

           < ProjectCard src={hipster} link="https://github.com/Ade-mir/
          company-landing-page-2" h3="Hipster"
          p="Glasses Shop"/>  

           < ProjectCard src={fitlift} link="https://github.com/Ade-mir/
          company-landing-page-2" h3="FitLift"
          p="Fitness App"/> 
    </div>
  </section>  
  );
} 

export default Projects;