import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../../assets/checkMark-dark.svg';
import SkillList from '../../../common/SkillList.jsx';

function Skills() {
  return (
   <section id="skills" className={styles.container}>
    <h1 className="sectionTitle" >Skills</h1>
    <div className={styles.skillList}>
      <SkillList src={checkMarkIcon} skill="JavaSCRIPT" />
      <SkillList src={checkMarkIcon} skill="TYPESCRIPT" />
      <SkillList src={checkMarkIcon} skill="REACT.JS" />
      <SkillList src={checkMarkIcon} skill="REACT NATIVE" />
      <SkillList src={checkMarkIcon} skill="NODE.JS" />
      <SkillList src={checkMarkIcon} skill="SOLIDITY " />
      <SkillList src={checkMarkIcon} skill="ETHERS.JS" />
      <SkillList src={checkMarkIcon} skill="HARDHAT" />
            <SkillList src={checkMarkIcon} skill="WAGMI + RAINBOWKIT" />

    </div>
    <hr />
      <div className={styles.skillList}>
      <SkillList src={checkMarkIcon} skill="COLLABORATION" />
        <SkillList src={checkMarkIcon} skill="RESEARCH" />
      <SkillList src={checkMarkIcon} skill="TEAMWORK" />
      <SkillList src={checkMarkIcon} skill="OWNERSHIP" />
      <SkillList src={checkMarkIcon} skill="CRITICAL THINKING" />
      <SkillList src={checkMarkIcon} skill="LEARNING MINDSET" />
     

    </div>
   </section>
  ); 
}

export default Skills;
