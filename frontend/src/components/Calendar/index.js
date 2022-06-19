import Day from '../Day';

const Calendar = () =>
{
    const week1 = ['1', '2', '3', '4', '5', '6', '7'];
    const week2 = ['8', '9', '10', '11', '12', '13', '14'];
    const week3 = ['15', '16', '17', '18', '19', '20', '21'];
    const week4 = ['22', '23', '24', '25', '26', '27', '28'];
    const week5 = ['29', '30'];

    const monthJune = [week1, week2, week3, week4, week5];

    return(
        <div>
            <h1> June </h1>
            <table>
                <thead>
                    <tr>
                        <td>Monday</td>
                        <td>Tuesday</td>
                        <td>Wednesday</td>
                        <td>Thursday</td>
                        <td>Friday</td>
                        <td>Saturday</td>
                        <td>Sunday</td>
                    </tr>
                </thead>
                <tbody>
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