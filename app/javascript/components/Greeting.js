import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomGreeting } from '../redux/greetings/apiSlice';

export default function Greeting() {
  const dispatch = useDispatch();
  const { greeting, error, isLoading } = useSelector(
    (state) => state );

  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: Please try aagin</div>;
  }

  return <p>Greeting: {greeting}</p>;
};

