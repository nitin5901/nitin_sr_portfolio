import styles from './cases.module.css';
import Image from 'next/image';

function blogObject(id, title, subtitle,image)
{
    return {id: id, title: title, subtitle: subtitle, image: image}
}
const blogsList = [
   blogObject(1,"Linkedin", "A custom blog for LinkedIn","/linkedin.jpg"),
   blogObject(2,"Github", "A custom blog for Github","/github.jpg"),
   blogObject(3,"Twitter", "A custom blog for Twitter","/twitter.jpg")
]

const Cases = () => {
     return(
        <section className={styles.casesWrapper}>
            <div className={styles.containerFluid}>
                <div className={styles.casesNavigation}>
                    <div className={styles.casesArrow + ' ' + "prev" + ' ' + "disabled"}>
                        <Image 
                            src={"/nextItem.svg"}
                            alt={"Next Blog"}
                            width={20}
                            height={20}
                            className={styles.btnNaviagtion}
                        />
                    </div>
                    <div className={styles.casesArrow + ' ' + "next"}>
                        <Image 
                                src={"/prevItem.svg"}
                                alt={"Previous Blog"}
                                width={20}
                                height={20}
                                className={styles.btnNaviagtion}
                            />
                    </div>
                </div>
                <div className={styles.row}>
                    {
                        blogsList.map((caseItem,index) => 
                            <div className={styles.case} key={index}>
                                <div className={styles.caseDetails}>
                                    <span className={styles.caseSubtitle}>{caseItem.subtitle}</span>
                                    <h2 className={styles.caseHeading}>{caseItem.title}</h2>
                                </div>
                                <div className={styles.caseImage+' '+"caseImage"}>
                                    <Image 
                                        src={caseItem.image}
                                        alt={caseItem.title}
                                        width={500}
                                        height={500}
                                    />
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
     );
}
 
export default Cases;