import styles from '../styles/Home.module.css'
import Overlay from "../Components/IntroOverlay/introOverlay";
import NavigationBar from "../Components/NavigationBar/navigationBar";
import Banner from "../Components/Banner/banner";
import Cases from "../Components/Cases/cases";
import {useEffect} from "react";
import {gsap} from "gsap";

export default function Home() {
    useEffect(()=>{
        var tl = gsap.timeline();
        tl.from(".headerContent",
            {
                y: 100,
                ease: "power4.out",
                duration: 1
            })
            .to(".headerContent",
                {
                    y: 0,
                    delay: 1,
                    duration: 2,
                    stagger: {
                        amount: 0.5
                    }
                })
            .to(".overlayTop",{
                duration: 1.6,
                height: 0,
                ease: "expo.inOut",
                stagger: {
                    amount: 0.4
                }
            })
            .to(".overlayBottom",{
                duration: 1.6,
                width: 0,
                ease: "expo.inOut",
                delay: -.8,
                stagger: {
                    amount: 0.4
                }
            })
            .to(".introOverlay",{
                duration:0,
                css: {
                    display: "none"
                }
            })
        ;
        console.log(1);
    },[])
  return (
    <div id={"root"}>
      <Overlay />
      <NavigationBar />
      <Banner />
      <Cases />
    </div>
  )
}
