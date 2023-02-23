import Card from "../../Components/Card/card";
import styles from './projects.module.css'

const Project = function() {
    return(
        <div className={styles.ProjectWrapper}>
            <Card
                title={"Project Title Goes Here"}
                imageSrc={"/demo.jpg"}
                description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. s PageMaker including versions of Lorem Ipsum."}
                techStack={["CSS", "Javascript", "React","Next"]}
            />
            <Card
                title={"Project Title Goes Here"}
                imageSrc={"/demo.jpg"}
                description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. s PageMaker including versions of Lorem Ipsum."}
                techStack={["CSS", "Javascript", "React","Next"]}
            />
            <Card
                title={"Project Title Goes Here"}
                imageSrc={"/demo.jpg"}
                description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. s PageMaker including versions of Lorem Ipsum."}
                techStack={["CSS", "Javascript", "React","Next"]}
            />
        </div>


    )
}

export default Project;