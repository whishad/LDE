import styles from "../Messenger.module.css"

const Message = () => {
    return (
        <div className={styles["message-box"]}>
            <div className={styles["message"]}>
                <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" viewBox="0 0 66 66" fill="none" className={styles["user-avatar"]}>
                    <circle cx="33" cy="33" r="33" fill="#E23131"/>
                    <text x="15" y="53" fill="white" fontSize="55px">B</text>
                </svg>
                <div className={styles["message-info-div"]}>
                    <p className={styles["message-author-name"]}>Ban</p>
                    <div className={styles["message-content-wrapper"]}>
                        <span className={styles["message-content"]}>
                            Could you provide more details about the shipping options available? In what ways did the modifications enhance the overall functionality ? Were there any specific challenges you faced during the modification process? Can you explain the reasoning behind each modification made?
                        </span>
                    </div>
                    <p className={styles["message-sent-time"]}>12:00</p>
                </div>
            </div>
        </div>
    )
}

export default Message