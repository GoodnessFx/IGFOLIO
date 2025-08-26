import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../../assets/checkMark-dark.svg';
import SkillList from '../../../common/SkillList.jsx';

function Skills() {
  return (
   <section id="skills" className={styles.container}>
    <h1 className="sectionTitle" >Skills</h1>
    <div className={styles.skillList}>
      <SkillList src={checkMarkIcon} skill="HTMl & CSS" />
      <SkillList src={checkMarkIcon} skill="JAVASCRIPT" />
      <SkillList src={checkMarkIcon} skill="NODE JS" />
      <SkillList src={checkMarkIcon} skill="REACT.JS" />
      <SkillList src={checkMarkIcon} skill="REACT NATIVE" />
      <SkillList src={checkMarkIcon} skill=" EXPO " />
      <SkillList src={checkMarkIcon} skill="ETHERS JS" />
      <SkillList src={checkMarkIcon} skill="FOUNDRY" />

    </div>
    <hr />
      <div className={styles.skillList}>
      <SkillList src={checkMarkIcon} skill="HTMl & CSS" />
      <SkillList src={checkMarkIcon} skill="JAVASCRIPT" />
      <SkillList src={checkMarkIcon} skill="NODE JS" />
      <SkillList src={checkMarkIcon} skill="REACT.JS" />
      <SkillList src={checkMarkIcon} skill="REACT NATIVE" />
      <SkillList src={checkMarkIcon} skill=" EXPO " />
      <SkillList src={checkMarkIcon} skill="ETHERS JS" />
      <SkillList src={checkMarkIcon} skill="FOUNDRY" />

    </div>
   </section>
  ); 
}

export default Skills;
