import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { ScrollView, Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{alignItems: 'flex-start'}}>
      <View>
        <Text style={styles.title}>Tab One</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
