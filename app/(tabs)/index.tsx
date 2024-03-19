import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import ResumeView from '@/components/ResumeView';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <ResumeView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
