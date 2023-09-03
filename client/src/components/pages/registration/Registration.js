import { useState } from 'react'
import styles from './Registration.module.css'

function Registration(){
    const [inpval, setVal] = useState("") // state to store input value 

    const handleInputChange = (e) => { // state value update function
        setVal(e.target.value)
    }

    const analyzeInputValue = () => { // checks if the input text matches the criteria
        if(inpval.trim().length === 0) return false
        if(inpval.length > 15) return false
        return true
    }

    return ( 
        <div className={styles["registration-box"]}>
            <input name="username" type="text" placeholder="your name" value={inpval} onChange={handleInputChange} className={styles["input"]}/>
            <button className={styles["btn"]} onClick={() => analyzeInputValue() && console.log("text has been validated")}>Register</button>
        </div>
    )
}

export default Registration