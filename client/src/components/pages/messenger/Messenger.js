import Message from "./components/Message"
import MessageForm from "./components/MessageForm"
import NavigationBar from "./components/NavigationBar"
import styles from './Messenger.module.css'

function Messenger(){
    return (
        <div className={styles["messenger-box"]}>
            <NavigationBar/>
            <div>
                <Message/>
            </div>
            <MessageForm/>
        </div>
    )
}

export default Messenger