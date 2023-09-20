import { useState } from "react"
import Message from "./components/Message"
import MessageForm from "./components/MessageForm"
import NavigationBar from "./components/NavigationBar"
import styles from './Messenger.module.css'

function Messenger(){
    const [points, setPoints] = useState([ // state to store chats(points) info 
        {
            point_name: "point1",
            id: "1"
        },
        {
            point_name: "point2",
            id: "2"
        },
    ])

    return (
        <div className={styles["messenger-box"]}>
            <NavigationBar points={points}/>
            <div>
                <Message/>
            </div>
            <MessageForm/>
        </div>
    )
}

export default Messenger