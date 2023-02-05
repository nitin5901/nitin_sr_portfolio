import styles from './project.module.css';
import {RoughNotation} from "react-rough-notation";

const Project = function ({ title, description, techStack=[], live_link, github_link }){
    return(
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <span className={styles.red}></span>
                <span className={styles.yellow}></span>
                <span className={styles.green}></span>
            </div>
            <div className={styles.projectInfo}>
                <h3 className={styles.title}><RoughNotation type="box"
                                                            color="red"
                                                            animate="true"
                                                            animationDuration = {1000}
                                                            show="true">{title}</RoughNotation> </h3>
                <p className={styles.description}>{description}</p>
                <div className={styles.techStackContainer}>
                    {
                        techStack.map(name=>{
                            return(<button className={styles.techStackButton}> {name} </button>);
                        })
                    }
                </div>
                <div>
                    <button className={styles.projectReference}>VISIT SITE</button>
                    <button className={styles.projectReference}>VIEW CODE</button>
                </div>
            </div>
        </div>
    );
}

export default Project;