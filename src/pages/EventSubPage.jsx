import useFethEvent from '../hooks/useFethEvent';
// import { Link } from 'react-router-dom';

const EventSubPage = () => {
  const event = useFethEvent();

  return (
    <>
      {event && (
        <div>
          <h3>{event.name}</h3>
          <img src={event.images[0].url} width={300} alt={event.name} />
          {/* <Link> More detales</Link> */}
        </div>
      )}
    </>
  );
};

export default EventSubPage;
