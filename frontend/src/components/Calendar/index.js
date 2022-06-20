import { useEffect, useState } from 'react';

import Day from '../Day';
import Modal from '../Modal';
import Meeting from '../Meeting';

import styles from './calendar.module.css'

const Calendar = () =>
{

    const week1 = [' ', ' ', '1', '2', '3', '4', '5'];
    const week2 = ['6', '7', '8', '9', '10', '11', '12'];
    const week3 = ['13', '14', '15', '16', '17', '18', '19'];
    const week4 = ['20', '21', '22', '23', '24', '25', '26'];
    const week5 = ['27', '28', '29', '30', ' ', ' ', ' '];

    const monthJune = [week1, week2, week3, week4, week5];

    const [meetingsList, setMeetingsList] = useState([]);
    const [newMeeting, setNewMeeting] = useState([]);
    const [showModal, setShowModal] = useState(false)

    useEffect(() => 
    {
        fetch('http://localhost:5000/meetings')
            .then((res) => res.json())
            .then((data) => setMeetingsList(data))
    }, []);

    return(
        <div className = {styles.calendar}>
            <h1 className = {styles.header}> June </h1>
            <table>
                <thead>
                    <tr className = {styles.dayText}>
                        <td>Monday</td>
                        <td>Tuesday</td>
                        <td>Wednesday</td>
                        <td>Thursday</td>
                        <td>Friday</td>
                        <td>Saturday</td>
                        <td>Sunday</td>
                    </tr>
                </thead>
                <tbody className = {styles.dateText}>
                    {
                        monthJune.map((week, weekIndex) =>
                        (
                            <tr key = {weekIndex}>
                                {
                                    week.map((date, dateIndex) =>
                                    (
                                        <td key = {dateIndex}>
                                            <Day 
                                                date = {date}
                                                modal = {() => 
                                                    {
                                                        setShowModal(true);
                                                        setNewMeeting(date);
                                                    }}
                                                meetings = {meetingsList.filter((meeting) => Number(meeting.date) == Number(date))}
                                            ></Day>
                                        </td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <Modal showModal = {showModal}>
                <Meeting
                    close = {() => {setShowModal(false);}}
                    date = {newMeeting}
                ></Meeting>
            </Modal>
        </div>
    )
}

export default Calendar;