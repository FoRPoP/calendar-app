import { useRouter } from 'next/router';
import { useEffect, useState} from 'react';

import styles from './meeting.module.css'

const Id = () => 
{
    const router = useRouter();
    const { id } = router.query;

    const [meeting, setMeeting] = useState([]);

    useEffect(() => 
    {
        fetch('http://localhost:5000/meetings/' + id)
            .then((res) => res.json())
            .then((data) => setMeeting(data));
    }, []);

    const deleteMeeting = () => 
    {
        const options = 
        {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            query: id
        }

        fetch('http://localhost:5000/meetings/' + id, options)
            .then(router.back());
    }

    return(
        <div className = {styles.div}>
            <h1 className = {styles.title}>{meeting?.title}</h1>
            <p>{meeting?.date}. June</p>
            <p>{meeting?.time} </p>
            <p>{meeting?.desc}</p>
            {meeting.participants?.length > 0 ? <h3>Participants: </h3> : <></>}
            <ul>
            {meeting.participants?.map((p, i) => (
                <li key={i}>{p}</li>
            ))}
            </ul>
            <button className = {styles.btn} onClick={() => deleteMeeting()}>Delete meeting</button>
            <button className = {styles.btn} onClick={() => router.push("/")}>Back</button>
        </div>
    )
}

export default Id;