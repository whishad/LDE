import styles from '../Messenger.module.css'

const NavigationBar = () => {
    return (
        <div className={styles["navbar"]}>
            <button className={styles["point-link-button"]}>point1</button>
            <button className={styles["point-link-button"]}>point2</button>
            <button className={styles["point-link-button"]}>point3</button>
            <button className={styles["point-link-button"]}>point4</button>
            <button className={styles["point-link-button"]}>point5</button>
            <button className={styles["point-link-button"]}>point6</button>
        </div>
    )
}

export default NavigationBar