import { useRouter } from 'next/router';

import styles from './day.module.css'

const Day = ({date, modal, meetings}) => 
{
    const router = useRouter();

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
                <div className = {styles.meetings}>
                {
                    meetings.map((meeting, idKey) =>
                    {
                        return <p key={idKey} 
                                    onClick = {() => {router.push('/meeting/' + meeting._id)}}
                                    className = {styles.meeting}>
                        {meeting.title} : {meeting.time}</p>
                    })
                }
                </div>
            </div>
        )
    }
    
}

export default Day;