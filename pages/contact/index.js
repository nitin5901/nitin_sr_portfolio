import styles from "./contact.module.css"
import Button from "../../Components/Button/button";
import Image from "next/image";
const ContactForm = function(){

    return(
        <div style={{display: "flex", flexDirection: "row-reverse", justifyContent: "space-evenly"}}>
            <form className={styles.formWrapper}>
                <fieldset className={styles.fieldset}>
                    <legend>Your Name</legend>
                    <input
                        type={"text"}
                        placeholder={"Type First Name"}
                        id={"first-name"} required={true}
                        className={styles.inputBox + ' ' + styles.name}
                    />
                    <input
                        type={"text"}
                        placeholder={"Type Last Name"}
                        id={"last-name"} required={true}
                        className={styles.inputBox + ' ' + styles.name}
                    />
                </fieldset>
                <fieldset className={styles.fieldset}>
                    <label htmlFor={"email-address"} className={styles.label}>Email Address</label>
                    <input type={"email"} placeholder={"you@example.com"} id={"email-address"} required={true} className={styles.inputBox + ' ' + styles.email}/>
                    <br />
                    <label htmlFor={"message"} className={styles.label}>Message</label>
                    <br />
                    <textarea id={"message"} className={styles.inputBox + ' ' + styles.message} name={"message"} rows={12} cols={50} ></textarea>
                    <br />
                </fieldset>
                <Button title={"Let's Chat"} style={{
                                                        width: "100%",
                                                        borderRadius: "8px",
                                                        marginTop: "5px"
                                                    }}
                />
            </form>
            <Image src={"/Contact_Page_Cartoon.png"}
                   alt={"Image"}
                   width={500}
                   height={400}
            />
        </div>
    )
}
export default ContactForm;