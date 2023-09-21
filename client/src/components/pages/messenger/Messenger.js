import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import Message from "./components/Message"
import MessageForm from "./components/MessageForm"
import NavigationBar from "./components/NavigationBar"
import styles from './Messenger.module.css'
import { getFromLocalStorage } from "../../../globalfunctions/local_storarge_functions"

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

    const [messages, setMessages] = useState([ // state to store messages
        {
            author: "George",
            author_pic_color: "#ffc31f",
            content: "My name is George, i love pizza",
            sent_time: "10:00",
            id: 1,
        },
    ])

    const current_point = useParams() // getting current chat(point) name

    const navigate = useNavigate()

    useEffect(() => {
        if(!getFromLocalStorage("username")) navigate("*")
    }, )

    return (
        <div className={styles["messenger-box"]}>
            <NavigationBar points={points}/>
            {current_point.point_name && 
            <div>
                <Message messages={messages}/>
            </div>}
            {current_point.point_name && <MessageForm/>}
        </div>
    )
}

export default Messenger