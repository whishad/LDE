import { useEffect, useState } from 'react'
import { setInLocalStorage, getFromLocalStorage } from '../../../globalfunctions/local_storarge_functions'
import { useNavigate } from "react-router-dom"
import styles from './Registration.module.css'
import { protectedRedirect } from '../../../globalfunctions/redirect_functions'

function Registration(){
    const [inpval, setVal] = useState("") // state to store input value 
    const [validity_messages, setValidityMessages] = useState([
        //state for storing validation messages
        {id:1, message: "Name must contain at least one symbol", active:false},
        {id:2, message: "Name cannot exceed 15 characters", active:false},
    ])
    const navigate = useNavigate() // to navigate between pages

    useEffect(() => { // to check if the user is logged in
        protectedRedirect(navigate, "/messenger", (x) => {return x})
    }, [navigate])

    const handleInputChange = (e) => { // state value update function
        setVal(e.target.value)
    }

    const influenceMessageActivity = (id, bool) => { //function to activate and deactivate the message
        setValidityMessages(prev_message => prev_message.map(obj => obj.id === id ? {...obj, active: bool} : {...obj}))
    }
    
    const analyzeInputValue = () => { // checks if the input text matches the criteria
        if(!inpval.trim().length) {
            influenceMessageActivity(1, true)
            return false
        }else{
            influenceMessageActivity(1, false)
        }
        if(inpval.length > 15){
            influenceMessageActivity(2, true)
            return false
        }else{
            influenceMessageActivity(2, false)
        }
        return true
    }

    return ( 
        <div className={styles["registration-page"]}>
            <div className={styles["registration-box"]}>
                {validity_messages.map(obj => obj.active ? 
                <p className={styles["validity_message"]} key={obj.id}>{obj.message}</p> : null)}
                <input name="username" type="text" placeholder="your name" value={inpval} onChange={handleInputChange} className={styles["input"]}/>
                <button 
                className={styles["btn"]} 
                onClick={() => analyzeInputValue() && setInLocalStorage("username", inpval, ()=>navigate("/messenger"))}>Register</button>
            </div>
        </div>
    )
}

export default Registration