import styles from "./introOverlay.module.css";

const Overlay = () => {
    return(
        <div className={"introOverlay"}>
            <div className={styles.top}>
                <div className={styles.overlayTop+' '+"overlayTop"}></div>
                <div className={styles.overlayTop+' '+"overlayTop"}></div>
                <div className={styles.overlayTop+' '+"overlayTop"}></div>
            </div>

            <div className={styles.bottom}>
                <div className={styles.overlayBottom+' '+"overlayBottom"}></div>
                <div className={styles.overlayBottom+' '+"overlayBottom"}></div>
                <div className={styles.overlayBottom+' '+"overlayBottom"}></div>
            </div>
        </div>
    )
}

export default Overlay;