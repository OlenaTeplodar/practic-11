import { useState, useEffect } from 'react';
import { fetchEventById } from '../services/moviesApi';
import { useParams } from 'react-router-dom';

const useFethEvent = () => {
  const [event, setEvent] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const result = fetchEventById(id);
    setEvent(result);
  }, [id]);
console.log(event);
  return event;
};

export default useFethEvent;
