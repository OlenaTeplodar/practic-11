import { useState, useEffect } from 'react';
import { fetchEventById } from '../services/moviesApi';
import { useParams } from 'react-router-dom';

const useFethEvent = () => {
  const [event, setEvent] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getSingleEvent = async () => {
      try {
        const result = fetchEventById(id);
        setEvent(result);
      } catch (error) {
        console.log(error.message);
      }
    };

    getSingleEvent();
  }, [id]);
  console.log(event);
  return event;
};

export default useFethEvent;
