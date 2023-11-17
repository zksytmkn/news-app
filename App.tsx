import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import { ListItem } from './src/components/listItem';

export default function App() {
  return (
    <View style={styles.container}>
      <ListItem imageUrl="https://picsum.photos/200/300" title="title" author="nekomaru" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
