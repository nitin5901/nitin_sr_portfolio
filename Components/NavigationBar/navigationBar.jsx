import Link from "next/link";
import styles from "./navigationBar.module.css"
const NavigationBar = function (){
    return(
        <nav className={styles.navWrapper}>
            <h2 className={styles.myName}> <Link href="/">Nitin Singh Rawat.</Link> </h2>
            <ul className={styles.pageNavigation}>
                <li> <Link href="/about"> About Me </Link> </li>
                <li> <Link href="/projects"> Projects </Link> </li>
                <li> <Link href="/contact"> Contact </Link> </li>
            </ul>
        </nav>
        )
}

export default NavigationBar;