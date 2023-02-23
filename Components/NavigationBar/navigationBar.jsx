import Link from "next/link";
import styles from "./navigationBar.module.css"
import Button from "../Button/button";

const NavigationBar = function (){
    return(
        <nav className={styles.navWrapper}>
            <h2 className={styles.myName}> <Link href="/"> Nitin Singh</Link> </h2>
            <ul className={styles.pageNavigation}>
                <li> <Link href="/"> Home </Link> </li>
                <li> <Link href="/about"> About </Link> </li>
                <li> <Link href="/projects"> Projects </Link> </li>
            </ul>
            <Link href="/contact"> <Button title={"Contact Me"} /> </Link>
        </nav>
        )
}

export default NavigationBar;