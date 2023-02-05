import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import {PointerAnimation } from "./pointerAnimation";
import  Image  from 'next/image';
import styles from './about.module.css'
import {useEffect} from "react";

const AboutMe = function (){
    useEffect(()=>{
        PointerAnimation();
    },[]);
    return(
        <>
            <div className={styles.trailer} id="trailer"></div>
            <div className={styles.WrapperAbout}>
                <div className={"about"} id={"about"}>
                    <h1 className={"salutation"}> Hello! I&apos;m Nitin, a <RoughNotation type="highlight"
                                                                                          color="#FACFE4"
                                                                                          animate="true"
                                                                                          animationDuration = {900}
                                                                                          show="true">developer</RoughNotation> based in India.</h1>
                    <p className={"description"}>I love building tools that are <RoughNotation type="highlight"
                                                                                               color="#FCDDB0"
                                                                                               animate="true"
                                                                                               animationDuration = {1000}
                                                                                               show="true">user-friendly&#44; simple</RoughNotation> and <RoughNotation type="highlight"
                                                                                                                                                                        color="#fffad7"
                                                                                                                                                                        animate="true"
                                                                                                                                                                        animationDuration = {1300}
                                                                                                                                                                        show="true">delightful.</RoughNotation> </p>
                    <p className={"description"}>I am a student at Bennett University where I started learning the fundamentals of <RoughNotation type="highlight"
                                                                                                                                                  color="#CAAFDF"
                                                                                                                                                  animate="true"
                                                                                                                                                  animationDuration = {1300}
                                                                                                                                                  show="true">Frontend Development.</RoughNotation> I have worked at different organisation which have upskilled me on my journey to become a design rich frontend developer.</p>
                    <p className={"description"}>Through these experiences,I had the opportunity to work with small and large projects and developed a working style that leans to <RoughNotation type="highlight"
                                                                                                                                                                                                  color="#FCDDB0"
                                                                                                                                                                                                  animate="true"
                                                                                                                                                                                                  animationDuration = {1300}
                                                                                                                                                                                                  show="true">flexibility</RoughNotation> , <RoughNotation type="highlight"
                                                                                                                                                                                                                                                           color="#CAAFDF"
                                                                                                                                                                                                                                                           animate="true"
                                                                                                                                                                                                                                                           animationDuration = {1300}
                                                                                                                                                                                                                                                           show="true">clarity</RoughNotation>  and <RoughNotation type="highlight"
                                                                                                                                                                                                                                                                                                                   color="#FCDDB0"
                                                                                                                                                                                                                                                                                                                   animate="true"
                                                                                                                                                                                                                                                                                                                   animationDuration = {1300}
                                                                                                                                                                                                                                                                                                                   show="true">collaboration.</RoughNotation> </p>
                    <p>I am currently looking for a new role as a frontend developer.<RoughNotation type="circle"
                                                                                                    color="#EA047E"
                                                                                                    animate="true"
                                                                                                    animationDuration = {1200}
                                                                                                    show="true"> Hire Me! </RoughNotation> </p>
                    <button className={styles.socialMediaButton}>View LinkedIn</button>
                    <button className={styles.socialMediaButton}>View Github</button>
                </div>
                <div className="image-container">
                    <Image
                        loading="lazy"
                        src={"/coder.jpg"}
                        alt={"Nitin-Profile-Picture"}
                        width={320}
                        height={420}
                    />
                </div>
            </div>
        </>
    )
}

export default AboutMe;