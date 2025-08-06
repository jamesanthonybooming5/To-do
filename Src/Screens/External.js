import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function External() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode); // Flip the switch
  };

  return (
    <View style={isDarkMode ? styles.darkContainer : styles.lightContainer}>
      <Text style={isDarkMode ? styles.darkText : styles.lightText}>
        {isDarkMode ? 'Dark Mode' : 'Light Mode'}
      </Text>
      <Button title="Toggle Theme" onPress={toggleTheme} />
    </View>
  );
}

const styles = StyleSheet.create({
  lightContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  darkContainer: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lightText: {
    color: '#000000',
    fontSize: 20,
    marginBottom: 20,
  },
  darkText: {
    color: '#ffffff',
    fontSize: 20,
    marginBottom: 20,
  },
});