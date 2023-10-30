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
    const [messages, setMessages] = useState([]) // state to store messages

    const current_point = useParams() // getting current chat(point) name

    const navigate = useNavigate()

    useEffect(() => {
        protectedRedirect(navigate, "*", (x) => {return !x})
    })

    useEffect(() => {
        sendRequest("GET", "http://127.0.0.1:5000/points")
            .then(data => setPoints(data))
            .catch(err => console.error(err))
    }, [])

    useEffect(() => {
        if(current_point.point_name){
            const match_name = points.filter(point => point.point_name === current_point.point_name)
            if(match_name.length){
                sendRequest("GET", `http://127.0.0.1:5000/points/${current_point.point_name}`)
                    .then(data => setMessages(data))
                    .catch(err => console.error(err))
            }else{
                navigate("*")
            }
        }
    }, [current_point])

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