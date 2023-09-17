import styles from '../Messenger.module.css'
import arrow_svg from '../../../../resources/images/send_message_button_arrow.svg'

const MessageForm = () => {
    return (
        <form className={styles["message-form"]}>
            <input type="text" className={styles["message-input"]}/>
            <button className={styles["message-button"]}>
                <img src={arrow_svg} alt="send message"/>
            </button>
        </form>
    )
}

export default MessageForm