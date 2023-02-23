import styles from './card.module.css'
import Image from "next/image";
import Link from "next/link";

const Card = ({title, imageSrc, description,techStack}) => {
    return(
        <div className={styles.CardWrapper}>
            <div className={styles.ImageContainer}>
                    <Image
                        src={imageSrc}
                        alt={<title></title>}
                        width={370}
                        height={300}
                    />
            </div>
            <div className={styles.techStackContainer}>
                {techStack.map( (technology,index)=> {
                    return(
                        <Image
                            loading="lazy"
                            src={`/icons/${technology.toLowerCase()}.svg`}
                            alt={`${technology}`}
                            width={25}
                            height={25}
                        />
                    );
                })}
            </div>
            <h3 className={styles.projectTitle}>
                {title}
            </h3>
            <p className={styles.projectDescription}>
                {description}
            </p>
            <div className={styles.linkContainer}>
                    <Link href={"https://www.svgrepo.com/svg/473620/github"} className={styles.links} target={"_blank"}>
                        <Image
                            src={"/hyperlink.svg"}
                            alt={"Live-Preview"}
                            width={25}
                            height={25}
                            className={styles.iconImage}
                        />
                        <span>Live Preview</span>
                    </Link>

                    <Link href={"https://www.svgrepo.com/svg/473620/github"} className={styles.links} target={"_blank"}>
                        <Image
                            src={"/github.svg"}
                            alt={"git-repo"}
                            width={25}
                            height={25}
                            className={styles.iconImage}
                        />
                        <span>View Code</span>
                    </Link>
            </div>
        </div>
    );
}

export default Card;