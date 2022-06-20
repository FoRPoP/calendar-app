import { useState, useEffect } from 'react';
import Calendar from '../src/components/Calendar';

export default function Home()
{
  const [meetings, setMeetings] = useState([]);
  useEffect(() =>
  {
    fetch('http://localhost:5000/meetings')
      .then((res) => res.json())
      .then((data) => setMeetings(data))
  }, []);

  if (meetings === undefined)
    return <div>Loading</div>
  else
  {
    return(
      <Calendar></Calendar>
    );
  }
}