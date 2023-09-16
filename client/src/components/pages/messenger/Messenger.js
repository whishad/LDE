import Message from "./components/Message"
import MessageForm from "./components/MessageForm"
import NavigationBar from "./components/NavigationBar"

function Messenger(){
    return (
        <>
            <Message/>
            <NavigationBar/>
            <MessageForm/>
        </>
    )
}

export default Messenger