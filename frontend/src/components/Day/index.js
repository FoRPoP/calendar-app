import styles from './day.module.css'

const Day = ({date, modal}) => 
{
    return(
        <div className = {styles.day} onDoubleClick = {modal}>
            <h1>{date}</h1>
        </div>
    )
}

export default Day;