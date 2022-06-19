import styles from './day.module.css'

const Day = ({date, modal, meetings}) => 
{
    if (date === ' ')
    {
        return(
            <div className = {styles.day}>
                <h1>{date}</h1>
            </div>
        )
    }
    else
    {
        return(
            <div className = {styles.day} onDoubleClick = {modal}>
                <h1>{date}</h1>
                {
                    meetings.map((meeting) =>
                    {
                        return <p>{meeting.title} : {meeting.time}</p>
                    })
                }
            </div>
        )
    }
    
}

export default Day;