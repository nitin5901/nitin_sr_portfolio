import styles from "./contact.module.css"
const ContactForm = function(){
    return(
            <form className={styles.formWrapper}>
                <fieldset className={styles.fieldset}>
                    <legend>Your Name</legend>
                    <input
                        type={"text"}
                        placeholder={"Type First Name"}
                        id={"first-name"} required={true}
                        className={styles.name}
                    />
                    <input
                        type={"text"}
                        placeholder={"Type Last Name"}
                        id={"last-name"} required={true}
                        className={styles.name}
                    />
                </fieldset>
                <fieldset className={styles.fieldset}>
                    <legend>Mail Me</legend>
                    <label htmlFor={"email-address"} className={styles.label}>Email Address</label>
                    <input type={"email"} placeholder={"you@example.com"} id={"email-address"} required={true}/>
                    <br />
                    <label htmlFor={"message"} className={styles.label}>Message</label>
                    <br />
                    <textarea id={"message"} name={"message"} rows={12} cols={50}></textarea>
                    <br />
                </fieldset>

            </form>
    )
}
export default ContactForm;