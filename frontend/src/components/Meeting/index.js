import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import Multiselect from 'multiselect-react-dropdown';

import styles from './meeting.module.css'

const Meeting = ({close, date}) =>
{
    const router = useRouter();

    const [allParticipants, setAllParticipants] = useState([]);
    const [title, setTitle] = useState("");
    const [time, setTime] = useState("");
    const [desc, setDesc] = useState("");
    const [participants, setParticipants] = useState([]);

    useEffect(() => 
    {
        fetch('http://localhost:5000/users')
            .then((res) => res.json())
            .then((data) => setAllParticipants(data));
    }, []);

    const multiselectList = useRef();

    const submitForm = (e) =>
    {
        e.preventDefault();

        if (validate())
        {
            const newMeeting = 
            {
                title: title,
                date: date,
                time: time,
                desc: desc,
                participants: participants?.map((participant) => participant.username)
            };

            const options = 
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(newMeeting)
            };

            fetch('http://localhost:5000/meetings/add', options)
                .then((res) => res.json())
            
            reset(e);
            window.location.reload();
        }
    }

    const reset = (e) =>
    {
        e.preventDefault();
        setTitle("");
        setTime("");
        setDesc("");
        setParticipants([]);
        multiselectList.current.resetSelectedValues();
        close();
    }

    const validate = () => 
    {
        console.log('validating');
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
            <div>
                <label className = {styles.label}>Add Participants: </label>
                <Multiselect
                options = {allParticipants}
                selectedValues = {[]}
                onSelect = {(selectedList, selectedItem) => setParticipants(selectedList)}
                onRemove={(selectedList, removedItem) => setParticipants(selectedList)}
                displayValue = "username"
                ref = {multiselectList}
                style={{
                    multiselectContainer: 
                    {
                      width: 600
                    },
                    searchBox: 
                    {
                      border: 'none',
                      'border-bottom': '1px solid black',
                      'border-radius': '0px'
                    }
                  }}
                ></Multiselect>
            </div>
            <br></br>
            <div className = {styles.btnLabel}>
                <button className = {styles.btn} type = 'submit'>Submit Meeting</button>
                <button className = {styles.btn} onClick = {(e) => reset(e)}>Close</button>
            </div>
        </form>
    )
}

export default Meeting;