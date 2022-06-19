import Day from '../Day';
import styles from './calendar.module.css'

const Calendar = () =>
{
    const week1 = [' ', ' ', '1', '2', '3', '4', '5'];
    const week2 = ['6', '7', '8', '9', '10', '11', '12'];
    const week3 = ['13', '14', '15', '16', '17', '18', '19'];
    const week4 = ['20', '21', '22', '23', '24', '25', '26'];
    const week5 = ['27', '28', '29', '30', ' ', ' ', ' '];

    const monthJune = [week1, week2, week3, week4, week5];

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
                                            <Day date = {date}></Day>
                                        </td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Calendar;