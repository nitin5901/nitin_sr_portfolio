import styles from '../styles/Home.module.css'
import Button from "../Components/Button/button";
import Image from "next/image";

export default function Home() {

  return (
    <div id={"root"} className={styles.root}>
        <section style={{width: "45%"}}>
            <h2 className={styles.salutation}>Hello, I'm <span>Nitin Singh </span></h2>
            <p className={styles.description}>
                I love building tools that are user-friendly, simple and delightful. I have developed a working style that leans to flexibility , clarity and collaboration in any project be it small or a large one. I am currently looking for a new role as a frontend developer. Hire Me!
            </p>
            <Button
                title={"Hire Me"}
                style={{marginRight: "50px"}}
            />
            <Button
                title={"Read My Work"}
                style={{backgroundColor: "transparent", border: "2px solid #000000", color: "#000000"}}
            />
        </section>
        <section>
            <Image
                src={"/Profile.png"}
                loading="lazy"
                width={350}
                height={400}
            />
        </section>
    </div>
  )
}
