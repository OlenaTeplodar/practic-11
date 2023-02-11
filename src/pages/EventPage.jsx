import { useState, useEffect } from 'react';
import { fetchEvents } from '../services/moviesApi';
import { Link, Outlet } from 'react-router-dom';

const EventPage = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const getEvents = async () => {
            try {
                const data = await fetchEvents();
                console.log(data);
                setEvents(data);
            } catch (error) {
                console.log(error.message);
            }

        }
        getEvents();
    }, [events]);

    const elements = events.map(({ name, id }) => { return (
      <li key={id}>
        <Link to={id}>{name}</Link>
      </li>
    ); });

    return (
      <>
        <ul>{elements}</ul>
        <Outlet />
      </>
    );
}

export default EventPage;