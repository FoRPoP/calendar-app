import styles from './day.module.css'

const Day = ({date}) => 
{
    return(
        <div className = {styles.day}>
            <h1>{date}</h1>
        </div>
    )
}

export default Day;