import styles from '../Messenger.module.css'
import arrow_svg from '../../../../resources/images/send_message_button_arrow.svg'
import { useState } from 'react'
import { useParams } from 'react-router'
import { v4 } from 'uuid'
import { sendRequest } from '../../../../globalfunctions/request_functions'
import { getFromLocalStorage } from '../../../../globalfunctions/local_storarge_functions'

const MessageForm = () => {
    const [inputValue, setInputValue] = useState("")

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const current_point = useParams()

    const handleSubmit = (e) => {
        e.preventDefault()
        inputValue.trim() &&
        sendRequest("POST", `http://localhost:5000/points/${current_point.point_name}`, {
            author: getFromLocalStorage("username"),
            author_pic_color: getFromLocalStorage("pic_color"),
            message_type: "text",
            content: inputValue,
            sent_time: (() => {
                const current_date = new Date()
                return `${current_date.getHours()}:${current_date.getMinutes()}`
            })(),
            id: v4(),
        }, 'application/json')
        setInputValue("")
    }

    return (
        <>
        <form onSubmit={handleSubmit} className={styles["message-form"]}>
            <div className={styles["reply-message-view"]}> 
                <p className={styles["reply-message-content"]}>
                    <span className={styles["reply-author-name"]}>Jhon</span>: this is reply message example.
                </p>
            </div>
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
        </>
    )
}

export default MessageForm