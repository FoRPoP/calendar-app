import { useState } from 'react';

import styles from './meeting.module.css'

const Meeting = ({close, date}) =>
{
    const [title, setTitle] = useState("");
    const [time, setTime] = useState("");
    const [desc, setDesc] = useState("");

    const submitForm = (e) =>
    {
        e.preventDefault();

        if (validate())
        {
            const newMeeting = 
            {
                title: title,
                day: date,
                time: time,
                desc: desc
            };
        }
    }

    const reset = (e) =>
    {
        e.preventDefault();
        setTitle("");
        setTime("");
        setDesc("");
        close();
    }

    const validate = () => 
    {
        if (title === undefined || title.length < 2)
        {
            window.alert("Enter the title correctly!")
            return false;
        } 
        if (time === undefined || time.length < 2) 
        {
            window.alert("Enter the time correctly!")
            return false;
        }
        
        return true;
    }

    return(
        <form className = {styles.form} onSubmit = {(e) => submitForm(e)}>
            <h1 className = {styles.label}>Schedule meeting for {date}. June:</h1>
            <div>
                <label className = {styles.label}>Meeting Title: </label>
                <input 
                    className = {styles.input}
                    type = 'text'
                    placeholder = 'Enter meeting title'
                    value = {title}
                    onChange = {(e) => setTitle(e.target.value)}
                ></input>
            </div>
            <div>
                <label className = {styles.label}>Meeting Time: </label>
                <input
                    className = {styles.input}
                    type = 'text'
                    placeholder = 'Enter meeting time'
                    value = {time}
                    onChange = {(e) => setTime(e.target.value)}
                ></input>
            </div>
            <div>
                <label className = {styles.label}>Meeting Description: </label>
                <input 
                    className = {styles.input}
                    type = 'text'
                    placeholder = 'Enter meeting description'
                    value = {desc}
                    onChange = {(e) => setDesc(e.target.value)}
                ></input>
            </div>
            <div className = {styles.btnLabel}>
                <button className = {styles.btn} type = 'submit'>Submit Meeting</button>
                <button className = {styles.btn} onClick = {(e) => reset(e)}>Close</button>
            </div>
        </form>
    )
}

export default Meeting;