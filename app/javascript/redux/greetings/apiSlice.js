import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRandomGreeting = createAsyncThunk(
  'greetings/fetchRandomGreeting',
  async () => {
    try {
      const greeting = await axios.get('/api/v1/greetings');
      return greeting.data.message
    } catch(error) {
      throw error
    }
    
  }
);
