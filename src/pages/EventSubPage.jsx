import useFethEvent from '../hooks/useFethEvent';
import { Link } from 'react-router-dom';

const EventSubPage = () => {
    const event = useFethEvent();
    
    return (
      <>
        <h3></h3>
        <img src="" alt="" />
        <p></p>
        <Link />
      </>
    );
}

export default EventSubPage;