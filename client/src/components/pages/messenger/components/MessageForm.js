import styles from '../Messenger.module.css'
import arrow_svg from '../../../../resources/images/send_message_button_arrow.svg'
import { useState } from 'react'

const MessageForm = () => {
    const [inputValue, setInputValue] = useState("")

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setInputValue("")
    }

    return (
        <form onSubmit={handleSubmit} className={styles["message-form"]}>
            <input 
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className={styles["message-input"]}
            />
            <button className={styles["message-button"]}>
                <img src={arrow_svg} alt="send message"/>
            </button>
        </form>
    )
}

export default MessageForm