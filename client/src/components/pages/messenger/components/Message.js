import styles from "../Messenger.module.css"
import file_icon from "../../../../resources/images/file-icon.svg"
import { useContext } from "react"
import ReplyingMessageContext from "./contexts/ReplyingMessageContext"

const Message = ({messages}) => {
    const { replyingMessage, setReplyingMessage  } = useContext(ReplyingMessageContext)

    const handleReplyClick = (message) => {
        setReplyingMessage(message)
    }

    const resizeMessageBoxIfReplying = (replyingMessage) => {
        if (replyingMessage["author"]){
            return {height: "478px"}
        }
    }

    const generateMessageStructure = (message) => { //generates a message html structure
        switch (message.message_type){
            case "text":
                return (
                    <div className={styles["message-text-content-wrapper"]}>
                        <span className={styles["message-text-content"]}>
                            {message.content}
                        </span>
                    </div>
                )
            case "reply":
                return (
                    <>
                        <div className={`${styles["message-text-content-wrapper"]} ${styles["message-reply-content-wrapper"]}`}>
                            <span className={`${styles["message-text-content"]} ${styles["message-reply-content"]}`}>
                                {messages.map(msg => {
                                    if(msg.id === message.replied_message_id){
                                        return <span key={msg.id}><b>{msg.author}:</b> {msg.content.slice(0, (message.content.length + 5) - msg.author.length)}...</span>
                                    }
                                })}
                            </span>
                        </div>
                        <div className={styles["message-text-content-wrapper"]}>
                            <span className={styles["message-text-content"]}>
                                {message.content}
                            </span>
                        </div>
                    </>
                )
            case "file":
                return (
                    <div className={styles["message-text-content-wrapper"]}>
                        <span className={styles["message-text-content"]}>
                            <img src={file_icon} alt="image" className={styles["file-icon"]}/>
                            {message.content}
                        </span>
                    </div>
                )
        }
    }
    return (
        <div className={styles["message-box"]} style={resizeMessageBoxIfReplying(replyingMessage)}>
        {        
            messages.map( message => 
                <div className={styles["message"]} key={message.id} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" viewBox="0 0 66 66" fill="none" className={styles["user-avatar"]}>
                        <circle cx="33" cy="33" r="33" fill={message.author_pic_color}/>
                        <text x="15" y="53" fill="white" fontSize="55px">{message.author[0]}</text>
                    </svg>
                    <div className={styles["message-info-div"]}>
                        <p className={styles["message-author-name"]}>{message.author}</p>
                        <p 
                        className={styles["message-reply-button"]} 
                        onClick={() => handleReplyClick(message)}>reply</p>
                        {generateMessageStructure(message)}
                        <p className={styles["message-sent-time"]}>{message.sent_time}</p>
                    </div>
                </div>
            )
        }
        </div>
    )
}

export default Message