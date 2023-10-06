import styles from "../Messenger.module.css"

const Message = ({messages}) => {
    return (
        <div className={styles["message-box"]}>
        {        
            messages.map( message => 
                <div className={styles["message"]} key={message.id} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" viewBox="0 0 66 66" fill="none" className={styles["user-avatar"]}>
                        <circle cx="33" cy="33" r="33" fill={message.author_pic_color}/>
                        <text x="15" y="53" fill="white" fontSize="55px">{message.author[0]}</text>
                    </svg>
                    <div className={styles["message-info-div"]}>
                        <p className={styles["message-author-name"]}>{message.author}</p>
                        <div className={styles["message-content-wrapper"]}>
                            <span className={styles["message-content"]}>
                                {message.content}
                            </span>
                        </div>
                        <p className={styles["message-sent-time"]}>{message.sent_time}</p>
                    </div>
                </div>
            )
        }
        </div>
    )
}

export default Message