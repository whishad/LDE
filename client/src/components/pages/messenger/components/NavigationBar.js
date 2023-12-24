import { NavLink, useParams } from 'react-router-dom'
import styles from '../Messenger.module.css'

const NavigationBar = ({points}) => {

    const current_point = useParams() // getting current chat(point) name

    const buttonIsActive = (button_point_name) => { // Activates/changes button background-color by returning a css class
        if(current_point.point_name == button_point_name){
            return "active-point-link-button"
        }
    }

    return (
        <div className={styles["navbar"]}>
            {points.map(point => 
                <NavLink key={point.id} to={`http://localhost:3000/messenger/${point.point_name}`}>
                    <button className={`${styles["point-link-button"]} ${styles[buttonIsActive(point.point_name)]}`}>
                        {point.point_name}
                    </button>
                </NavLink>
            )}
        </div>
    )
}

export default NavigationBar