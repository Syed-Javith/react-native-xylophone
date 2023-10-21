import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import XyloPhone from './components/XyloPhone';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <XyloPhone/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop : 15
  },
});
