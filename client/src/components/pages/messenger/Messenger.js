import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import Message from "./components/Message"
import MessageForm from "./components/MessageForm"
import NavigationBar from "./components/NavigationBar"
import styles from './Messenger.module.css'
import { protectedRedirect } from "../../../globalfunctions/redirect_functions"
import { sendRequest } from "../../../globalfunctions/request_functions"

function Messenger(){
    const [points, setPoints] = useState([]) // state to store chats(points) info 

    const [messages, setMessages] = useState([ // state to store messages
        {
            author: "George",
            author_pic_color: "#ffc31f",
            message_type: "text",
            content: "My name is George, i love pizza",
            sent_time: "10:00",
            id: 1,
        },
        {
            author: "George",
            author_pic_color: "#ffc31f",
            message_type: "file",
            content: "pizza-bot.py",
            sent_time: "10:01",
            id: 2,
        },
        {
            author: "Martin",
            author_pic_color: "#FF0000",
            message_type: "reply",
            content: "What else can this bot do?",
            sent_time: "10:04",
            replied_message_id: 2,
            id: 3,
        },
    ])

    const current_point = useParams() // getting current chat(point) name

    const navigate = useNavigate()

    useEffect(() => {
        protectedRedirect(navigate, "*", (x) => {return !x})
        if(current_point.point_name){
            const match_name = points.filter(point => point.point_name === current_point.point_name)
            if(!match_name.length) navigate("*")
        }
    })

    useEffect(() => {
        sendRequest("GET", "http://127.0.0.1:5000/points")
            .then(data => setPoints(data))
            .catch(err => console.error(err))
    }, [])

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