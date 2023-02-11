import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryEvent = searchParams.get('event');

  useEffect(() => {
    if (queryEvent === '' || queryEvent === null) return;
  }, [queryEvent]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    setSearchParams({ queryEvent: form.elements.event.value });
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Search event
        <input type="text" name="event" />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchPage;
