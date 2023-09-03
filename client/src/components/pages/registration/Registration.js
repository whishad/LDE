import styles from './Registration.module.css'

function Registration(){
    return ( 
        <div className={styles["registration-box"]}>
            <input name="username" type="text" placeholder="your name" className={styles["input"]}/>
            <button className={styles["btn"]}>Register</button>
        </div>
    )
}

export default Registration