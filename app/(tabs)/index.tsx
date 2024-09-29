import { Image, StyleSheet, Platform, } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';
import ThemedTextInput from '@/components/ThemedTextInput';

export default function HomeScreen() {
  const [destination, setDestination] = useState('')

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/hero-img.png')}
          style={styles.img}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Letsss Gooo!</ThemedText>
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="default">Making travel planning pure fun</ThemedText>
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
        <ThemedTextInput
          placeholder='Search your next destination'
          defaultValue=''
          onChangeText={newText => setDestination(newText)}
          style={styles.textInput}
        />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  img: {
    position: 'static',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0
  },
  textInput: {
    width: '100%'
  }
});
