import styles from './button.module.css';

const Button = ({title, clickedFunction, style}) => {
    return(
        <button className={styles.button} style={style}>
            {title}
        </button>
    )
}

export default Button;