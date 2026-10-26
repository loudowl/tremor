import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EventCard = ({ event }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{event.type.toUpperCase()}</Text>
      <Text style={styles.description}>{event.description}</Text>
      <Text style={styles.timestamp}>{new Date(event.timestamp).toLocaleString()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#2D2D2D',
    margin: 10,
    padding: 15,
    borderRadius: 8,
  },
  title: {
    color: '#FFBF00',
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  timestamp: {
    color: '#B0B0B0',
    fontSize: 14,
  },
});

export default EventCard;
