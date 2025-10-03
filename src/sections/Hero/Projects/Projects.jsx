import viberr from '../../../assets/viberr.png';
import styles from "./ProjectsStyles.module.css";
import hipster from "../../../assets/hipsster.png";
import freshBurger from "../../../assets/fresh-burger.png";
import fitlift from "../../../assets/fitlift.png";
import ProjectCard from '../../../common/ProjectCard.jsx';
function Projects() {
  return ( <section id="projects"  className={styles.container}>
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

          { /* Additional placeholders for more projects */ }
          < ProjectCard src={viberr} link="#" h3="Project 5" p="Coming Soon"/>
          < ProjectCard src={freshBurger} link="#" h3="Project 6" p="Coming Soon"/>
          < ProjectCard src={hipster} link="#" h3="Project 7" p="Coming Soon"/>
          < ProjectCard src={fitlift} link="#" h3="Project 8" p="Coming Soon"/>
          < ProjectCard src={viberr} link="#" h3="Project 9" p="Coming Soon"/>
          < ProjectCard src={freshBurger} link="#" h3="Project 10" p="Coming Soon"/>
          < ProjectCard src={hipster} link="#" h3="Project 11" p="Coming Soon"/>
          < ProjectCard src={fitlift} link="#" h3="Project 12" p="Coming Soon"/>
          < ProjectCard src={viberr} link="#" h3="Project 13" p="Coming Soon"/>
          < ProjectCard src={freshBurger} link="#" h3="Project 14" p="Coming Soon"/>
          < ProjectCard src={hipster} link="#" h3="Project 15" p="Coming Soon"/>
          < ProjectCard src={fitlift} link="#" h3="Project 16" p="Coming Soon"/>
          < ProjectCard src={viberr} link="#" h3="Project 17" p="Coming Soon"/>
          < ProjectCard src={freshBurger} link="#" h3="Project 18" p="Coming Soon"/>
          < ProjectCard src={hipster} link="#" h3="Project 19" p="Coming Soon"/>
    </div>
  </section>  
  );
} 

export default Projects;