import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from '../state/reducers/events';
import EventCard from '../components/EventCard';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const events = useSelector(state => state.events);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  return (
    <View style={{ flex: 1, backgroundColor: '#121212' }}>
      <FlatList
        data={events}
        renderItem={({ item }) => <EventCard event={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default HomeScreen;
