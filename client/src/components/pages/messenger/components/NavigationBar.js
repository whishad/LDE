import { NavLink } from 'react-router-dom'
import styles from '../Messenger.module.css'

const NavigationBar = ({points}) => {
    return (
        <div className={styles["navbar"]}>
            {points.map(point => 
                <NavLink key={point.id} to={`http://localhost:3000/${point.point_name}`}>
                    <button className={styles["point-link-button"]}>
                        {point.point_name}
                    </button>
                </NavLink>
            )}
        </div>
    )
}

export default NavigationBar