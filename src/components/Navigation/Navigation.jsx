import { NavigationLink } from './Navigation.styled';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavigationLink to={'/'}>Home</NavigationLink>
        </li>
        <li>
          <NavigationLink to={'events'}>Event</NavigationLink>
        </li>
        <li>
          <NavigationLink to={'search'}>Search</NavigationLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
