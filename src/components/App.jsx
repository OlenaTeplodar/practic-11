import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from '../pages/HomePage';
import EventPage from '../pages/EventPage';
import EventSubPage from '../pages/EventSubPage';
import SearchPage from 'pages/SearchPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="events" element={<EventPage />}>
          <Route path=":id" element={<EventSubPage />} />
        </Route>
        <Route path="search" element={<SearchPage />}>
          <Route path=":id" element={<EventSubPage />} />
        </Route>
      </Route>
    </Routes>
  );
};
