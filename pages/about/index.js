import  Image  from 'next/image';
import styles from './about.module.css'
import Button from "../../Components/Button/button";
import Link from "next/link";

const AboutMe = function (){
    return(
            <div className={styles.aboutWrapper}>
                <section>
                    <Image
                        src={"/Profile2.png"}
                        loading="lazy"
                        width={550}
                        height={550}
                    />
                </section>
                <section style={{width: "45%",}}>
                    <h2 className={styles.salutation}>Hi, I'm <span>Nitin</span></h2>
                    <p className={styles.description}>
                        A final year student at Bennett University, major in ECE. I started coding since I was
                        in my High School which was very heavily focused on C++ and OOP. My journey with web development
                        stated in my second semester learning Javascript, HTML and basic CSS. Brushing up for some months I switched
                        my gears, learning REACT and CSS advance techniques like flexbox, grids, typography and little bit about
                        animations.
                    </p>
                    <p className={styles.description}>
                        I have 1 year and 6 months of experience working and learning stuff in two different organisations building UI.
                        My work primarily showcases my skills in React, Javascript and CSS. Apart from these my tech stack also includes
                        Typescript and Node.
                    </p>
                    <p className={styles.description}>
                        Not all the time I code , my other hobbies that I love to do , playing badminton , running , reading stuff about aviation,
                        warfare and maritime affairs.
                    </p>
                    <div className={styles.chatSection}>
                        <div style={{display: "flex", width: "40%",alignItems: "center", justifyContent: "space-evenly"}}>
                            <Link href={"#"}> <Image src={"/linkedin.svg"} alt={"Linkedin"} width={"25"} height={"25"} /> </Link>
                            <Image src={"/line.svg"} alt={"|"} width={"30"} height={"40"} />
                            <Link href={"#"}> <Image src={"/instagram.svg"} alt={"Linkedin"} width={"25"} height={"25"} /> </Link>
                            <Image src={"/line.svg"} alt={"|"} width={"30"} height={"40"} />
                            <Link href={"#"}> <Image src={"/twitter.svg"} alt={"Linkedin"} width={"25"} height={"25"} /> </Link>
                        </div>
                        <Button title={"Let's Chat"} style={{width: "230px"}}/>
                    </div>

                </section>
            </div>
    )
}

export default AboutMe;