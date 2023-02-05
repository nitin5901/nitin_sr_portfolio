import styles from './banner.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Banner = () => {
return (
     <section className={styles.main}>
        <div className={styles.container}>
            <div className={styles.row}>
                <h2 className={styles.bannerHeading}>
                    <div className={styles.line + ' ' + "line"}>
                        <span className={styles.headerContent + ' ' + "headerContent"}>Turning ideas into real life product </span>
                    </div>
                    <div className={styles.line+ ' ' + "line"}>
                        <span className={styles.headerContent+ ' ' + "headerContent"}>is my calling.</span>
                    </div>
                </h2>

                <div className={styles.rowButton}>
                    <Link href="/about" className={styles.anchor}> More about Me
                    <Image 
                            src={"/arrow-right.svg"} 
                            alt={"About Me"} 
                            loading="lazy" 
                            width={20}
                            height={20}
                            className={styles.image}
                        /> 
                    </Link>
                </div>
            </div>
        </div>
     </section>
     )
}

export default Banner;